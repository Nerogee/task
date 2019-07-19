import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as RecommendationActions} from "./redux";
import API from "../../config/endpoint";
import { filterApp, fetchGrossAppListFromLocalStorage } from "../../utils/Utils";
import { GROSS_APP_LIST_TIME_TO_LIVE } from "../../config/settings";
import Slider from "react-slick";
import "../../assets/css/recommendation/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Recommendation extends Component {
    componentDidMount() {
        this.fetchGrossAppList();
    }

    fetchGrossAppList = ()=> {
        let cacheGrossAppList = fetchGrossAppListFromLocalStorage();
        if (cacheGrossAppList.length > 0) {
            this.props.updateGrossList(cacheGrossAppList);
            return false;
        }

        fetch(API.GROSS_APP_LIST, {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => response.json().then(json=>({
                header: response,
                json
            })
        )).then(({header, json}) => {
            if (!header.ok) {
                alert("Fetch Gross App List Fail");
            } else {
                this.props.updateGrossList(json.grossAppList);

                localStorage.setItem('cacheGrossAppList', JSON.stringify(json.grossAppList));
                localStorage.setItem('grossAppListExpireAt', Date.now() + GROSS_APP_LIST_TIME_TO_LIVE);
            }
        }).catch (error => {
            alert("Fetch Gross App List Fail");
        })
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 10,
            slidesToScroll: 1,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 8,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll:1
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll:1
                    }
                }
            ]
        };
        return (
            <div className="app-recommendation-wrapper">
                <div className="app-recommendation__title">推介</div>
                <div className="app-recommendation-row">
                    <Slider {...settings}>
                {
                    this.props.recommendation.grossAppList.map((item, index)=> {
                        return filterApp(item, this.props.search.searchTerm)
                            ?
                        (

                                <div key={item.id} className="app-recommendation-row__app-item">
                                    <img className="app-recommendation-row__app-item-image" src={item.artworkUrl100}
                                         alt="app icon"/>
                                    <div className="app-recommendation-row__app-item-name">{item.name}</div>
                                    <div className="app-recommendation-row__app-info-genre">{item.genres[0].name}</div>
                                </div>


                        ) : null
                    })
                }
                </Slider>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        app: state.app,
        recommendation: state.recommendation,
        search: state.search,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(RecommendationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommendation);