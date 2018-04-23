import React from "react";
import "./movies.css";
const movies = require ('../movies.json');

class Movies extends React.Component {
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
			movies = []
		} = this.props

		return (
			<div className={"movies"}>
			{movies.map((movie, index) => (
				<div key={index}>
				{movie.title}
				</div>
				))}
		</div>
		)
	}
}

export default Movies;


/* sample of json data.
[
	{
	  "title": "Pirates of the Caribbean: On Stranger Tides",
	  "cover": "/images/On_Stranger_Tides_Poster.jpg",
	  "year": "2011",
	  "cost": 378.5,
	  "starring": [
	  		{ "name": "Johnny Depp" },
			{ "name": "Penélope Cruz" },
			{ "name": "Ian McShane" },
			{ "name": "Kevin R. McNally" },
			{ "name": "Geoffrey Rush" }
		]
	},*/
