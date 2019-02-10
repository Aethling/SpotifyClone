import React, { Component } from 'react';
import Spotify from 'spotify-web-api-js';
import Dashboard from './components/Dashboard';

// const spotifyWebApi = new Spotify();

class App extends Component {
	constructor() {
		super();
		const params = this.getHashParams();
		this.state = {
			loggedIn: params.access_token ? true : false,
			isDashboard: false,
			token: params.access_token
		}
		// if (params.access_token) {
		// 	spotifyWebApi.setAccessToken(params.access_token);
		// }
	}

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  // getNowPlaying() {
  // 	spotifyWebApi.getMyCurrentPlaybackState()
  // 		.then((response) => {
  // 			//console.log the response to see all useful info to use;
  // 			console.log(response);
  // 			this.setState({
  // 				nowPlaying: {
  // 					name: response.item.name,
  // 					image: response.item.album.images[0].url 
  // 				}
  // 			})
  // 		})
  // }
			// <div>Now Playing: {this.state.nowPlaying.name}</div>
			// <div>
			// 	<img src={this.state.nowPlaying.image} style={{width: 100}}></img>
			// </div>
	gotoDashboard() {
		this.setState({
			isDashboard: true
		})
	}
	render() {
		if (this.state.isDashboard) {
			return (
				<Dashboard token={this.state.token}/>
			)
		} else {
			return (
				<div className="welcomePage">
					<a href="http://localhost:8888">
						<button>Login with Spotify</button>
					</a>
					<button onClick={() => this.gotoDashboard()}>Go to Dashboard</button>
				</div>
			)
		}
	}
};

export default App;