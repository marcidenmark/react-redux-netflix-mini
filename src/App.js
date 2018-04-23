import React, { Component } from 'react'; //free code from React
import './App.css';
import Movie from './components/Movie';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React with Redux Netflix</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
