import React, { Component } from 'react';
import LoginForm from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {


    state = {
        username: "",
        password: "",
    }

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        usernameLogin: PropTypes.func.isRequired,
    }

    render(){
        return(
            <LoginForm {...this.props} 
            usernameValue = {this.state.username}
            passwordValue = {this.state.password}
            handleInputChange = {this._handleInputChange}
            handleSubmit = {this._handleSubmit}
            handleFacebookLogin = {this._handleFacebookLogin}
            />
        )
    }

    _handleInputChange = event => {
        const {target: {value,name}} = event;
        this.setState({[name]: value});
        console.log(this.state.username)
    }
    
    _handleSubmit = event => {
        event.preventDefault()
        this.props.usernameLogin(
                this.state.username,
                this.state.password
        );
    }

    _handleFacebookLogin = response => {
        this.props.facebookLogin(response.accessToken);
    }

}

export default Container