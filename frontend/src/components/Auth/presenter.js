import React from 'react';
import styles from './styles.scss'
import LoginForm from 'components/LoginForm';
import SignupForm from 'components/SignupForm';
import PropTypes from 'prop-types';

const Auth = (props, context) => (
    <main className = {styles.auth}>
        <div className = {styles.column}>
            <img src = {require('images/phone.PNG')} alt = "check our app is cool"/>
        </div>
        <div className = {styles.column}>
            <div className = {`${styles.whiteBox} ${styles.formBox}`}>
            <img src={require('images/logo.PNG')} alt = 'Logo'/>
            {props.action === 'login' && <LoginForm/>}
            {props.action === 'signup' && <SignupForm/>}
            </div>
            <div className = {styles.whiteBox}>
            {props.action === 'login' && (
                <p className={styles.text}>
                {context.t("Don't have an acount? ")}
                    <span
                    className= {styles.changeLink}
                    onClick = { props.changeAction}
                    >
                    Sign Up
                    </span>
                </p>
            )}
            {props.action === 'signup' && (
                <p className={styles.text}>
                {context.t("Have an acount? ")}
                    <span
                    className= {styles.changeLink}
                    onClick = { props.changeAction}
                    >
                    {context.t("Log In")}
                    </span>
                </p>
            )}
            </div>
            <div className = {styles.appBox}>
                <span>Get app</span>
                <div className = {styles.appStore}>
                    <img src = {require('images/ios.png')} alt = "get from appStore"/>
                    <img src = {require('images/android.png')} alt = "get from playStore"/>
                </div>
            </div>
        </div>
    </main>
);

Auth.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Auth