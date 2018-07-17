import {connect} from 'react-redux';
import Container from './container';
import {actionCreators as PhotoActions } from 'redux/modules/photo';

const mapStateToProps = (state,ownprops) => {
    const {photo:{feed}} = state;
    return{
        feed
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        getFeed: () => {
            dispatch(PhotoActions.getFeed());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Container);