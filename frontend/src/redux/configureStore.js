import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import user from 'redux/modules/user';
import photo from 'redux/modules/photo';
import { i18nState } from "redux-i18n";

const history = createHistory();

const env = process.env.NODE_ENV;

const middlewares = [thunk,routerMiddleware(history)];

if( env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const reducer = combineReducers({
    user,
    photo,
    routing: routerReducer,
    i18nState
});
let store;

if(env === "development"){
    store = initialState => 
        createStore(reducer,composeWithDevTools(applyMiddleware(...middlewares)));
} else {
    store = initialState => createStore(reducer,applyMiddleware(...middlewares));
}

export { history };

export default store();