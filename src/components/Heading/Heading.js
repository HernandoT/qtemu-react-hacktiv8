import React, { Component } from "react";
import './Heading.css';
import PropTypes from 'prop-types';

export default class Heading extends Component {
    render() {
        return(
            <div className={`heading ${this.props.class}`}>
                <h1 className={`${this.props.class}`}>{this.props.text}</h1>
            </div>
        )
    }
}

Heading.propTypes = {
    class: PropTypes.string,
    text: PropTypes.string
}