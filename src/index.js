import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// all above code came with the create react app
import { Provider } from 'react-redux';
import { createStore }from 'react-redux';
const reducers = require ('./modules');
const routes = require ('./routes');
//______________________________
//See page 289 for explaining of reduxers
// module.exports = render((
// 	<Provider store={ createStore(reducers)}>
// 	{routes}
// 	</Provider>
// ), document.getElementById('app'))
// __________________________________________
// To render the Provider component, use react-dom’s render().
// It takes the
// 1. first argument (<Provider>)
// 2. and mounts it into the element you pass as the second argument
// (document.getElementById('app')).
//
//

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
