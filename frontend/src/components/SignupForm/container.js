import React,{ Component } from 'react';
import SignupForm from './presenter';
import PropTypes from 'prop-types';

class Container extends Component {
    state = {
        fullname: "",
        phoneoremail: "",
        username: "",
        password: "",
    }

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
    }

    render() {
        return(
            <SignupForm 
            usernameValue = {this.state.username}
            passwordValue = {this.state.password}
            fullnameValue = {this.state.fullname}
            phoneoremailValue = {this.state.phoneoremail}
            handleInputChange = {this._handleInputChange}
            handleSubmit = {this._handleSubmit}
            handleFacebookLogin = {this._handleFacebookLogin}/>
        )
    }

    _handleInputChange = event => {
        const {target: {name, value}} = event;
        this.setState({[name]: value})
        console.log(this.state.username, this.state.phoneoremail)
    }

    _handleSubmit = event => {
        event.preventDefault()
    }
    _handleFacebookLogin = response => {
        this.props.facebookLogin(response.accessToken);
    }
}


export default Container;