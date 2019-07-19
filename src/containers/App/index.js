import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as AppActions } from "../App/redux"
import { actions as ListingActions } from "../Listing/redux"
import Search from "../Search";
import Listing from "../Listing";
import Recommendation from "../Recommendation";
import Spinner from '../../components/spinner';
import API from "../../config/endpoint";
import { fetchAppListFromLocalStorage } from "../../utils/Utils";
import { APP_LIST_TIME_TO_LIVE } from "../../config/settings";
import "../../assets/css/app/index.scss";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1,
            haveMoreApp: true
        }
        this.fetchAppList = this.fetchAppList.bind(this);
    }

    rootScrollContainer = React.createRef();

    componentDidMount() {
        this.fetchAppList();
        this.rootScrollContainer.current.addEventListener("scroll", () => {
            if (this.rootScrollContainer.current.scrollTop + this.rootScrollContainer.current.clientHeight + 100 >=this.rootScrollContainer.current.scrollHeight){
                if (this.state.haveMoreApp) {
                    this.fetchAppList();
                }
            }
        })
    }

    componentWillUnmount() {
        this.rootScrollContainer.current.removeAllListeners();
    }

    fetchAppList(){
        if (this.props.listing.preventLoading || this.props.app.isLoading || !this.state.haveMoreApp) return false;
        this.props.updateLoading(true);

        // start: get app list from local cache if exist
        let cachedAppList = fetchAppListFromLocalStorage(this.state.pageNumber);
        if (cachedAppList.length > 0) {
            let newAppList = Object.assign([], [...this.props.listing.appList]).concat(cachedAppList);
            this.props.updateAppList(newAppList);
            this.setState({
                pageNumber:this.state.pageNumber+1,
                haveMoreApp: newAppList.length < localStorage.getItem('totalRecord')
            });
            this.props.updateLoading(false);
            return false;
        }
        // end

        fetch(API.APP_LIST, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pageNumber: this.state.pageNumber
            })
        }).then(response => response.json().then(json=>({
                header: response,
                json
            })
        )).then(({header, json}) => {
            if (!header.ok) {
                alert("Fetch App List Fail");
            } else {
                let appList = Object.assign([], [...this.props.listing.appList]).concat(json.list);
                this.props.updateAppList(appList);
                this.setState({
                    pageNumber:this.state.pageNumber+1,
                    haveMoreApp: json.haveMoreApp
                });

                localStorage.setItem('cacheAppList', JSON.stringify(appList));
                localStorage.setItem('totalRecord', json.totalRecord);
                localStorage.setItem('appListExpireAt', Date.now() + APP_LIST_TIME_TO_LIVE);
            }
            this.props.updateLoading(false);

        }).catch (error => {
            this.props.updateLoading(false);
            alert("Fetch App List Fail");
        })
    }

    render() {
        return (
            <div className="app-wrapper">
                <Search/>
                <div className="app-scroll-wrapper" ref={this.rootScrollContainer}>
                    <Recommendation/>
                    <Listing pageNumber={this.state.pageNumber} rootScrollContainer={this.rootScrollContainer.current} />
                </div>
                <div className="app-wrapper__loading-indicator">
                    { this.props.app.isLoading ? <Spinner/> : null }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        app: state.app,
        listing: state.listing,
        search: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(AppActions, dispatch),
        ...bindActionCreators(ListingActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);