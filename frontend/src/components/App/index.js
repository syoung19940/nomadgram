import Container from "./container";
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn
    };
};

export default connect(mapStateToProps)(Container);

