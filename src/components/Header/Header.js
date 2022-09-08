import React, { Component } from "react";
import './Header.css';
import Title from '../Title/Title';
import Navigation from '../Navigation/Navigation';

export default class Header extends Component {
    render() {
        return(
            <div className='header'>
                <Title/>
                <Navigation/>
            </div>
        )
    }
}