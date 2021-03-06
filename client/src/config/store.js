import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true});

const middleWare = [thunk];
if (process.env.ENVIRONMENT !== 'production') {
	middleWare.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWare)));

export default store;
