import songsReducer from './songsReducer';
import userReducer from './userReducer';
import browseReducer from './browseReducer';
import { combineReducers } from 'redux';

export default combineReducers({userReducer, songsReducer, browseReducer});

