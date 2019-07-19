import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";

export default class TrackVisibility extends Component {
    ref = React.createRef();

    async componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >=0.1) {
                    if (entry.target.className.indexOf('fly-in') === -1) {
                        entry.target.className = entry.target.className + ' fly-in';
                    }
                }
            },
            {
                root: this.props.rootScrollContainer,
                rootMargin: '80px',
                threshold: 0.1
            }
        )

        if (this.ref.current) {
            observer.observe(this.ref.current)
        }
    }

    render() {
        return <div className={"visibility-wrapper " + this.props.customClassName} ref={this.ref}>{this.props.children}</div>
    }
}

TrackVisibility.propTypes = {
    customClassName: PropTypes.string,
    rootScrollContainer: PropTypes.object
}