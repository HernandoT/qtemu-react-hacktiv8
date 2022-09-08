import React, { Component } from "react";
import './NavItem.css';
import PropTypes from 'prop-types';

export default class NavItem extends Component {
    render() {
        return(
            <div className='nav-item'>
                <a className={`${this.props.class}`} href={`${this.props.href}`}>{this.props.text}</a>
            </div>
        )
    }
}

NavItem.propTypes = {
    class: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.string
}