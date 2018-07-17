import React from 'react';
import PropTypes from 'prop-types';

const PhotoComments = (props,context) => (
    <div>
        <ul>
            <Comment 
                username = {props.creatorName}
                message = {props.message}/> 
            {props.comments.map(comment => (<Comment username = {comment.creator.username} message = {comment.message} key={comment.id}/>))}
        </ul>
    </div>
)

const Comment = (props) => (
    <li>
        <span>{props.username}</span> <span>{props.message}</span>
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