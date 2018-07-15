import React from 'react';
import FormStyles from 'shared/FormStyles.scss'
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';


const SignupForm = props => {
    return(
        <div className = {FormStyles.formComponent}>
            <h3 className={FormStyles.signupHeader} >Sign up to see photos and videos from your friends.</h3>
            <FacebookLogin
                appId="391662011325078"
                autoLoad={false}
                fields="name,email,picture"
                callback={props.handleFacebookLogin}
                cssClass= {FormStyles.button}
                icon="fa-facebook-official" />
            <span className = {FormStyles.divider}> or </span>
            <form className = {FormStyles.form} onSubmit = {props.handleSubmit}>
                <input 
                type = 'text' 
                placeholder = 'phone or email' 
                className = {FormStyles.textInput}
                value = {props.phoneoremailValue}
                name = 'phoneoremail'
                onChange = {props.handleInputChange}/>
                <input 
                type = 'text' 
                placeholder = 'full name' 
                className = {FormStyles.textInput}
                value = {props.fullnameValue}
                name = 'fullname'
                onChange = {props.handleInputChange}/>
                <input 
                type = 'text' 
                placeholder = 'username' 
                className = {FormStyles.textInput}
                value = {props.usernameValue}
                name = 'username'
                onChange = {props.handleInputChange}/>
                <input 
                type = 'text' 
                placeholder = 'password' 
                className = {FormStyles.textInput}
                value = {props.passwordValue}
                name = 'password'
                onChange = {props.handleInputChange}/>
                <input type = 'submit' value = 'signup' className = {FormStyles.button}/>
            </form>
            <p className={FormStyles.terms}>
                By signing up, you agree to our <span>Terms & Privacy Policy</span>.
            </p>
        </div>
    )
}

SignupForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    phoneoremailValue: PropTypes.string.isRequired,
    fullnameValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
}

export default SignupForm;
