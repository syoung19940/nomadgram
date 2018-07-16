import Container from "./container";
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {
    const { user,routing:{location} } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        pathname: location.pathname
    };
};

export default connect(mapStateToProps)(Container);

