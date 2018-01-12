import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ""
		};

		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	handleSearchTermChange(event) {
		this.setState({ searchTerm: event.target.value });
	}

	render() {
		return (
			<div className="search">
				<Header
					searchTerm={this.state.searchTerm}
					showSearch
					handleSearchTermChange={this.handleSearchTermChange}
				/>
				<div>
					{this.props.shows
						.filter(
							show =>
								`${show.title} ${show.description} ${show.year}`
									.toUpperCase()
									.indexOf(
										this.state.searchTerm.toUpperCase()
									) >= 0
						)
						.map(show => (
							<ShowCard key={show.imdbID} show={show} />
						))}
				</div>
			</div>
		);
	}
}

export default Search;
