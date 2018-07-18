import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';
import PhotoAction from '../PhotoAction';
import PhotoComments from '../PhotoComments';
import TimeStamp from '../TimeStamp';
import CommentBox from '../CommentBox';


const FeedPhoto = (props,context) =>{
    console.log(props)
    return(
    <div className={styles.feedPhoto} >
        <header className={styles.header}>
            <img 
            src = { props.creator.profile_image || require('images/noPhoto.jpg')}
            alt = {props.creator.username}
            className={styles.image}
            />
            <div className={styles.headerColumn}>
                <span className={styles.creator}>{props.creator.username}</span>
                <span className={styles.location}>{props.location || ' '}</span>
            </div>
        </header>
        <img src = {props.file} alt = {props.caption}></img>
        <div className={styles.meta}>
            <PhotoAction photoId = {props.id} number = {props.like_count} isLiked = {props.is_liked}/>
            <PhotoComments
                creatorName={props.creator.username}
                caption = {props.caption}
                comments = {props.comments}/>
            <TimeStamp date = {props.natural_time}/>
            <CommentBox photoId = {props.id}/>
        </div>
    </div>
    )
}

FeedPhoto.propTypes = {
    id: PropTypes.number.isRequired,
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    file: PropTypes.string.isRequired,
    is_liked: PropTypes.bool.isRequired,
    location: PropTypes.string,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
        message: PropTypes.string.isRequired,
        creator: PropTypes.shape({
            profile_image: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,
    natural_time: PropTypes.string.isRequired
};

export default FeedPhoto;