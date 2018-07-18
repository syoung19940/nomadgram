import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Ionicon from 'react-ionicons';

const PhotoAction = (props,context) => (
    <div className={styles.actions}>
        <div className={styles.icons}>
            <span className={styles.icon} onClick = {props.handleHeartClick}>
            {
                props.isLiked
            ?
            <Ionicon icon = "ios-heart"  fontSize="28px" color="#EB4B59"></Ionicon>
            :
            <Ionicon icon = "ios-heart-outline"  fontSize="28px" color="black"></Ionicon>
            }
            </span>
            <span className={styles.icon}>
                <Ionicon icon="ios-text-outline" fontSize="28px" color="black"></Ionicon>
            </span>
        </div>
        <span className={styles.likes}>
            {props.number}{" "}{props.number === 1 ? context.t('like'): context.t('likes')}
        </span>
    </div>
)

PhotoAction.contextTypes = {
    t: PropTypes.func.isRequired
}

PhotoAction.propTypes = {
    number: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    photoId: PropTypes.number.isRequired,
    handleHeartClick: PropTypes.func.isRequired,
};

export default PhotoAction;