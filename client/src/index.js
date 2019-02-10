import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import App from './App';
// import { Provider } from 'react-redux';
// import reducer from './reducers/beer';
// import { createStore } from 'redux';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<App />, document.getElementById('app'));
