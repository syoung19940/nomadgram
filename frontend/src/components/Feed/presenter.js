import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import styles from './styles.scss';


const Feed = (props,context) => {
    
    if(props.loading){
        return <LoadingFeed/>
    }
    
    return <div>"Feed!"</div>
}

const LoadingFeed = props => (
    <div className = {styles.feed}>
        <Loading/>
    </div>
)


Feed.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default Feed;