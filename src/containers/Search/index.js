import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as SearchActions} from "./redux";
import { actions as ListingActions} from "../Listing/redux";
import SearchIcon from '@material-ui/icons/Search';
import { isSearchTermExist } from "../../utils/Utils";
import "../../assets/css/search/index.scss";

class Search extends Component
{
    constructor(props){
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        // When typing scroll to top, the list
        window.clearTimeout(this.setTimeout);
        this.props.updatePreventLoading(true);
        this.setTimeout = window.setTimeout(function(){
            this.props.updatePreventLoading(false)
        }.bind(this), 100);
        this.props.changeSearchTerm(event.target.value);
    }

    render() {
        return (
            <div className="app-search-wrapper">
                <div className="app-search__search-box-wrapper">
                    <input className="app-search__search-box" value={this.props.search.searchTerm} onChange={this.handleSearchChange}/>
                    {
                        isSearchTermExist(this.props.search.searchTerm) ? null:  <div className="app-search__placeholder"><SearchIcon className="search-icon"/>搜尋</div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        search: state.search,
        recommendation: state.recommendation,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(SearchActions, dispatch),
        ...bindActionCreators(ListingActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);