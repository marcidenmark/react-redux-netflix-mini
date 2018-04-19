import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// all above code came with the create react app
const {Provider} = require ('react-redux');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
