import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { songsReducer }from '../reducers/songsReducer';
import userReducer from '../reducers/userReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({userReducer, songsReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
