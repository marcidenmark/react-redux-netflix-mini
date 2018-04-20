import React from "react";
import "./movies.css";
const movies = require ('../../movies.json')

class Movies extends Component {
	componentWillMount() {
		this.props.fetchMovie(this.props.params.id)
	}

	componentWillUpdate(next) {
		if (this.props.params.id !== next.params.id) {
			this.props.fetchMovie(next.parapms.id)
		}
	}

	render() {
		const {
			movie = {
				starring: []
			}
		} = this.props

		return (
			<div
			className={movie }
			)
	}



}
export default Movies;
