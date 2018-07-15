import { connect } from 'react-redux';
import Container from './container';
import {ActionCreators as UserActions} from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        facebookLogin: access_token => {
        dispatch(UserActions.facebookLogin(access_token));
        },
        usernameLogin: (username,password) => {
            dispatch(UserActions.usernameLogin(username,password));
        }
    };
};

export default connect(null,mapDispatchToProps)(Container);