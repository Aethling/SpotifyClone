import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();


class HomePage extends Component {
	state = {
		myData: null,
		isLoading: true
	}

	componentDidMount() {
			fetch('https://api.spotify.com/v1/me', {
					headers: {'Authorization': 'Bearer ' + this.props.token}
				})
					.then(checkStatus)
					.then(blob => blob.json())
					.then(data => this.setState({myData: data, isLoading: false}))

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
		console.log(this.state);
		return (
			<div>
	    	{this.state.myData ?
		    	<div> 
		    		<h1>{this.state.myData.display_name}</h1>
		    		<h3>Followers: {this.state.myData.followers.total}</h3>
		    		<img src={this.state.myData.images[0].url}/> 
	    		</div>
	    		: <h2>Still Loading</h2>  }

			</div>
		)
	}
}
}
export default HomePage;