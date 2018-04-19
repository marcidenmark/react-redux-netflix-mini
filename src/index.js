import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// all above code came with the create react app
import { Provider } from 'react-redux';
import { createStore }from 'react-redux';
//const reducers = require ('/modules');
//const routes = require ('/routes');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
