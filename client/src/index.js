import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import App from './App';
import { Provider } from 'react-redux';

import store from './config/store';

ReactDOM.render(
  <Provider store={store}>
    <App />	
  </Provider>, document.getElementById('app')
);
