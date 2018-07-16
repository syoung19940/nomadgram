//import

//actions

//aciton creator

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
        .then(response => response.json())
        .then(json => console.log(json))
    }
}

//initial state

const initialState = {
    feed: [],
};

//reducer

function reducer(state=initialState, action){
    switch(action.type){
        default:
            return null;
    }
}

//reducer function

//export action creator

export const actionCreators = {
    getFeed
}

//export reducer

export default reducer;