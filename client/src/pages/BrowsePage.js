import React, { Component } from 'react';

class BrowsePage extends Component {
	state = {
		browseData: null,
		isLoading: true
	}

	componentDidMount() {

		fetch('https://api.spotify.com/v1/browse/categories', {
				headers: {'Authorization': 'Bearer ' + this.props.token}
		})
			.then(checkStatus)
			.then(blob => blob.json())
			.then(data => this.setState({browseData: data.categories.items, isLoading: false}))
		
		function checkStatus(response) {
			if (response.ok) {
				return Promise.resolve(response);
			} else {
				return Promise.reject(new Error(response.statusText));
			}
		}
	}

	 
render() {
	if (this.state.isLoading) {
		return (
			<div>
				<p>Loading</p>
			</div>
		)
	} else {
		return (
			<div className="browseContainer">
				{this.state.browseData.map((category, index) => <img key={index} className="browseIcon" src={category.icons[0].url}/> )}
			</div>
		)
	}
}
}
export default BrowsePage;