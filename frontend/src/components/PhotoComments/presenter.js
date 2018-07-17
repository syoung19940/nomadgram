import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PhotoComments = (props,context) => (
    <div className={styles.comments}>
        <ul className={styles.list}>
            <Comment 
                username = {props.creatorName}
                message = {props.caption}/> 
            {props.comments.map(comment => (<Comment username = {comment.creator.username} message = {comment.message} key={comment.id}/>))}
        </ul>
    </div>
)

const Comment = (props) => (
    <li className={styles.comment}>
        <span className={styles.username}>{props.username}</span>
        <span className={styles.message}>{props.message}</span>
    </li>
)

PhotoComments.contextTypes = {
    t: PropTypes.func.isRequired
}

PhotoComments.propTypes = {
    creatorName: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
        message: PropTypes.string.isRequired,
        creator: PropTypes.shape({
            profile_image: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,
    caption: PropTypes.string.isRequired
}

export default PhotoComments;