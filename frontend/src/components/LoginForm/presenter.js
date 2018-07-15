import React from 'react';
import FormStyles from 'shared/FormStyles.scss'
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

const LoginForm = props => {
    return (
        <div className ={FormStyles.formComponent}>
            <form className ={FormStyles.form} onSubmit = {props.handleSubmit}>
                <input 
                type = 'text' 
                placeholder = "Username" 
                className ={FormStyles.textInput}
                name = 'username'
                onChange = {props.handleInputChange}
                value = {props.usernameValue}
                />
                <input 
                type = 'text' 
                placeholder = 'password'
                className ={FormStyles.textInput}
                name = 'password'
                onChange = {props.handleInputChange}
                value = {props.passwordValue}/>
                <input type = 'submit' value = 'log in' className ={FormStyles.button}/>
            </form>
            <span  className={FormStyles.divider}> or </span>
            <FacebookLogin
                appId="391662011325078"
                autoLoad={false}
                fields="name,email,picture"
                callback={props.handleFacebookLogin}
                cssClass= {FormStyles.facebookLink}
                icon="fa-facebook-official" />
            <span className={FormStyles.forgotLink}>forgot password?</span>
        </div>        
    )
}

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
}

export default LoginForm;
