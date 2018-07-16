import {connect} from 'react-redux';
import Container from './container';
import {actionCreators as PhotoActions } from 'redux/modules/photo';

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        getFeed: () => {
            dispatch(PhotoActions.getFeed());
        }
    }
}


export default connect(null,mapDispatchToProps)(Container);