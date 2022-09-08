import React, { Component } from "react";
import './Button.css';
import PropTypes from 'prop-types';

export default class Button extends Component {
    render() {
        return(
            <div>
                <button className={`btn ${this.props.btnStyle}`}>
                    {this.props.btnText}
                </button>
            </div>
        )
    }
}

Button.propTypes = {
    btnStyle: PropTypes.string,
    btnText: PropTypes.string
}