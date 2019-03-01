import songsReducer from './songsReducer';
import userReducer from './userReducer';
import browseReducer from './browseReducer';
import titleReducer from './titleReducer';
import albumsReducer from './albumsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
									userReducer, 
									songsReducer, 
									browseReducer,
									titleReducer,
									albumsReducer
								});

