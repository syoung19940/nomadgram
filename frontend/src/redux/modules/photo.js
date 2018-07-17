//import

import {ActionCreators as UserActions} from 'redux/modules/user';

//actions

const SET_FEED = 'SET_FEED';

//aciton creator

function setFeed(feed){
    return{
        type: SET_FEED,
        feed
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

//initial state

const initialState = {
};

//reducer

function reducer(state=initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state,action);
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

//export action creator

export const actionCreators = {
    getFeed,
    setFeed
}

//export reducer

export default reducer;