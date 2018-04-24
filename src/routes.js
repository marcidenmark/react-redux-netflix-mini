import React from 'react';
import App from './App.js'
import Movies from './components/Movies.js';
import Movie from './components/Movie.js';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { BrowserRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
// import { Router, Route, hashHistory } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// const {
// 	Router,
// 	Route,
// 	IndexRoute,
// 	BrowserRouter,
// } = require ('react-router')

module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route component={Movies} />
				<Route path="movies" component={Movies}>
					<Route path=":id" component= {Movie} />
				</Route>
		</Route>
	</Router>
)
//With React-Router every route can be declared by nested *Route components*
//The components take 2 properites
//1. path URL
//2. and component
//
// line 13- browserHistory provides browser or hash history to the router
// line 15- IndexRoute defines the index route for the empty URL
//
// Both IndexRoute and Route are nested into the topmost route.
// This makes the Movies component render for both the root and movies locations
// The movie view needs a movie ID to fetch info about a movie from the Redux store
// note colon syntax.
//
//
