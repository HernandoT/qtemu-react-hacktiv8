import React, { Component } from "react";
import './Navigation.css';
import NavItem from '../NavItem/NavItem';

export default class Navigation extends Component {
    render() {
        return(
            <div className='nav'>
                <NavItem
                    href='#create'
                    text='Create Meetup'
                    />
                <NavItem
                    href='#explore'
                    text='Explore'
                    />
                <NavItem
                    class='login'
                    href='#login'
                    text='Login'
                    />
            </div>
        )
    }
}