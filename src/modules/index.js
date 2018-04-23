const { combineReducers } = require('redux')

const { reducer: movies } = require('./movies')
//creates a reducer object called movies from the reducer property of movies.js

module.exports = combineReducers({ movies })
// more recucers can go there.
