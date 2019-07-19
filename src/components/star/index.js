import React, { Component } from 'react';
import PropTypes from 'prop-types';
import star_empty from "../../assets/images/star_emtpy.png";
import star_fill from "../../assets/images/star_fill.png";

export default class Star extends Component {
    render() {
        return (
            [...Array(5).keys()].map((item)=>{
                let imageSrc = item < this.props.rating ? star_fill : star_empty;
                let status = item < this.props.rating ? "active" : "inactive";
                return <img key={item} className={ "star " + status } src={imageSrc} alt="star"/>;
            })
        )
    }
}

Star.propTypes = {
    rating: PropTypes.number
}