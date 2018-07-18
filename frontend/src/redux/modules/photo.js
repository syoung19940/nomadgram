//import

import {ActionCreators as UserActions} from 'redux/modules/user';

//actions

const SET_FEED = 'SET_FEED';
const LIKE_PHOTO = 'LIKE_PHOTO';
const UNLIKE_PHOTO = 'UNLIKE_PHOTO';
const COMMENT_PHOTO = 'COMMENT_PHOTO';


//aciton creator

function setFeed(feed){
    return{
        type: SET_FEED,
        feed
    }
}

function doLikePhoto(photoId){
    return{
        type: LIKE_PHOTO,
        photoId
    }
}

function doUnlikePhoto(photoId){
    return{
        type: UNLIKE_PHOTO,
        photoId
    }
}

function doCommentPhoto(photoId,comment){
    return{
        type: COMMENT_PHOTO,
        photoId,
        comment
    }
}

//api action creator

function getFeed(){
    return (dispatch, getState) => {
        const {user:{token}} = getState();
        fetch('/images/',{
            method: 'GET',
            headers:{
                'Authorization': `JWT ${token}`
            }
        })
        .then(response => {

            if(response.status === 401){
                dispatch(UserActions.logout());
            }
            return response.json()
        })
        .then(json => dispatch(setFeed(json)))
    }
}

function likePhoto(photoId){
    return (dispatch,getState) => {
        dispatch(doLikePhoto(photoId));
        const {user:{token}} = getState();
        fetch(`/images/${photoId}/likes/`,{
            method: 'POST',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(UserActions.logout());
            } else if(!response.ok){
                dispatch(doUnlikePhoto(photoId));
            }
        })
    }
}

function unlikePhoto(photoId){
    return (dispatch,getState) => {
        dispatch(doUnlikePhoto(photoId));
        const {user:{token}} = getState();
        fetch(`/images/${photoId}/unlikes/`,{
            method: 'DELETE',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(UserActions.logout());
            } else if(!response.ok){
                dispatch(doLikePhoto(photoId));
            }
        })
    }
}


function commentPhoto(photoId,message){
    return (dispatch,getState) => {
        const {user:{token}} = getState();
        fetch(`/images/${photoId}/comments/`,{
            method: 'POST',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        })
        .then(response => {
            if(response.status === 401){
                dispatch(UserActions.logout());
            }
            return response.json()
        })
        .then(json => {
            if(json.message) dispatch(doCommentPhoto(photoId,json));
        })
    }
}

//initial state

const initialState = {
};

//reducer

function reducer(state=initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state,action);
        case LIKE_PHOTO:
            return applyLikePhoto(state,action);
        case UNLIKE_PHOTO:
            return applyUnlikePhoto(state,action);
        case COMMENT_PHOTO:
            return applyCommentPhoto(state,action);   
        default:
            return state;
    }
}

//reducer function

function applySetFeed(state,action){
    const {feed} = action;
    return{
        ...state,
        feed
    }
}

function applyLikePhoto(state, action){
    const {photoId} = action;
    const { feed } = state;
    const updateFeed = feed.map(photo => {
        if(photoId === photo.id) return {...photo, is_liked: true, like_count: photo.like_count + 1}
        return photo;
    })
    return {
        ...state,
        feed: updateFeed
    }
}

function applyUnlikePhoto(state, action){
    const {photoId} = action;
    const { feed } = state;
    const updateFeed = feed.map(photo => {
        if(photoId === photo.id) return {...photo, is_liked: false, like_count: photo.like_count - 1}
        return photo;
    })
    return {
        ...state,
        feed: updateFeed
    }
}

function applyCommentPhoto(state,action){
    const {photoId, comment} = action;
    const { feed } = state;
    const updateFeed = feed.map(photo => {
        if(photo.id === photoId){
            return {...photo, comments: [...photo.comments, comment]}
        }
        else return photo;
    })

    return {
        ...state,
        feed:updateFeed
    }
}

//export action creator

export const actionCreators = {
    getFeed,
    setFeed,
    likePhoto,
    unlikePhoto,
    commentPhoto
}

//export reducer

export default reducer;