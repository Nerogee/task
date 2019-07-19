import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as ListingActions} from "./redux";
import { actions as AppActions} from "../App/redux";

import Star from '../../components/star';
import TrackVisibility from '../../components/TrackVisibility';
import { filterApp } from "../../utils/Utils";
import "../../assets/css/listing/index.scss";

class Listing extends Component {
    render() {
        return (
            <div className="app-listing-wrapper">
                <div className="listing-wrapper" >
                    {
                        this.props.listing.appList.slice(0, (this.props.pageNumber - 1)  * 10).map((item, index)=>{
                            return filterApp(item, this.props.search.searchTerm) ?
                                (
                                    <TrackVisibility customClassName="listing-app-row" key={item.id} rootScrollContainer={this.props.rootScrollContainer}>
                                        <div className="listing-app-row__ranking">{index + 1}</div>
                                        <div className="listing-app-row__image-wrapper">
                                            <img className="listing-app-row__image" src={item.artworkUrl100} alt="app icon"/>
                                        </div>
                                        <div className="listing-app-row__app-info">
                                            <div>{item.name}</div>
                                            <div className="listing-app-row__app-info-genre">{item.genres[0].name}</div>
                                            <div className="listing-app-row__app-info-rating">
                                                <Star rating={item.averageUserRating} />
                                                <div className="listing-app-row__app-info-rating-count">({item.userRatingCount})</div>
                                            </div>
                                        </div>
                                    </TrackVisibility>
                                ) : null
                        })
                    }
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
        ...bindActionCreators(ListingActions, dispatch),
        ...bindActionCreators(AppActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing);