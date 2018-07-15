import React from 'react';
import {Link} from 'react-router-dom';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import styles from "./styles.scss";

const Navigation = (props,context) => (
    <div className = {styles.navigation}>
        <div className = {styles.inner}>
            <div className = {styles.column}>
                <Link to = '/'>
                    <img src = {require("images/logo.PNG")}  alt = "logo"/>
                </Link>
            </div>
            <div className = {styles.column} >
                <input
                type = 'text'
                placeholder = 'search'
                className = {styles.searchInput}/>
            </div>
            <div className = {styles.column} >
                <div className = {styles.navIcon}>
                    <Link to = '/explore'>
                        <Ionicon icon = "ios-compass-outline" color = 'black'/>
                    </Link>
                </div>
                <div className = {styles.navIcon}>
                        <Ionicon icon="ios-heart-outline"/>
                </div>
                <div className = {styles.navIcon}>
                    <Link to = '/profile'>
                        <Ionicon icon="ios-person-outline"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

Navigation.contextTypes = {
    t: PropTypes.func.isRequired,
}

export default Navigation;