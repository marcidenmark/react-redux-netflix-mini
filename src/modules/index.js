//modules folder index.js
const { handleActions } = require('redux-actions')

const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movie/FETCH_MOVIE'
// ACTION in ALL_CAPS. module name in lowercase
//  action types are declared as constant strings
// This awesome!
// To change the data in the store, you use actions.
// You use a reducer function and end up with a new state.
// Every time you want to change the application state, you need to dispatcch a corresponding action
const initialState = {
	movies: [],
	movie: {}
}

module.exports = {
	fetchMoviesActionCreator: (movies) => ({
		type: FETCH_MOVIES,
		movies
	}),
// Defines the FETCH_MOVIES action creator that returns an action object
	fetchMovieActionCreator: (index) => ({
		type: FETCH_MOVIE,
		index
	}),
	reducer: handleActions({
		[FETCH_MOVIES]: (state, action) => ({
			...this.state,
			all: action.movies
		}),
	// (above)gets all movies in the Movies component
		[FETCH_MOVIE]: (state,action) => ({
			...state,
			current: state.all[action.index - 1]
		})
	//(above) gets current movie in movie component by using index(URL param for movie ID)
	},
		initialState)
}

// A reducer is a function that runs every time any action is dispatched.
//  Executes with 2 args:
	//1. State-- the part of the state that it manages.
	//2. Action --is an object that represents the action that hs just been dispatched
//   	this means:
		//the reducer's inputs are results of previous actions:
//					--- the current state and action.
//		the RESULT is a new state.
//
//IN J.S.
// the reduce method takes a list of items and outputs a single value.
//
// The Action creator is a funtion that returns an action
//
// AN ACTION MUST HAVE THE "TYPE" PROPERTY
//
// To change data in the store, you use actions.











