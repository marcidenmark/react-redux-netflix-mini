import React from 'react';
const {
	Router
	Router
	IndexRoute,
	browserHistory
} = require ('react-router')
const App = require('App.js')
const Movies =  require('components/Movies.js')
const Movie = require('components/Movie.js')

module.exports = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Movies} />
				<Route path="movies" component {Movies}>
					<Route path=":id" component {Movie} />
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
