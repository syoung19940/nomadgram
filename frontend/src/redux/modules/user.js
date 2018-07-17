//imports

//actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

//action creators

function saveToken(token){
    return {
        type: SAVE_TOKEN,
        token
    };
}

function logout(){
    return{
        type: LOGOUT
    }
}

//api actions

function facebookLogin(access_token){
    return function(dispatch){
        fetch("/users/login/facebook/",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            access_token
        }),
    })
    .then(response => response.json())
    .then(
        json => {
            if(json.token){
                dispatch(saveToken(json.token));
            }
        })
    .catch(err => console.log(err));
    }
}

function usernameLogin(username,password){
    return function(dispatch){
        fetch("rest-auth/login/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(json =>{
            if(json.token){
                dispatch(saveToken(json.token));
            }
        })
        .catch(err => console.log(err));
    }
}

function createAccount(username,password,email){
    return function(dispatch){
        fetch('rest-aut/registration',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password1:password,
                password2: password,
                email,
            })
        })
        .then(response => response.json())
        .then(json => {
            if(json.token){
                dispatch(saveToken(json.token))
            }
        })
    }
}


//initial state

const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    token: localStorage.getItem("jwt")
};

//reducer

function reducer(state = initialState, action){
    switch (action.type){
        case SAVE_TOKEN:
            return applyToken(state,action);
        case LOGOUT:
            return applyLogout(state,action);
        default:
            return state;
    }
}

//reducer functions

function applyToken(state,action){
    const { token } = action;
    localStorage.setItem("jwt", token);
    return {
        ...state,
        isLoggedIn: true,
        token
    }
}

function applyLogout(state,action){
    localStorage.removeItem("jwt");
    return {
        isLoggedIn: false,
    }
}

//exports


export const ActionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    logout
}

//reducer export

export default reducer;