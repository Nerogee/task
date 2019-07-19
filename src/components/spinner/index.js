import React from 'react';
import "./styles.scss";
class Spinner extends React.Component {
    render(){
        return (
            <div className="admin__data-grid-loading-mask">
                <div className="spinner">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default Spinner;