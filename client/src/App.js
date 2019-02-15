import React, { Component } from 'react';
// import Spotify from 'spotify-web-api-js';
import { connect } from 'react-redux'
import Dashboard from './components/Dashboard';
import { setToken } from './actions/tokenActions';

//call gethashParams in constructor and sets the token
//and the logged in
//action to set token
//action to see if logged in or not

class App extends Component {
	constructor() {
		super();
		const params = this.getHashParams();
		// this.state = {
		// 	isLoggedIn: params.access_token ? true : false,
		// 	token: params.access_token
		// }
	}

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    // return hashParams;
    if (hashParams.access_token) {
    	setToken(hashParams.access_token)
    	return true;
    } else {
    	return false;
    }
  }

	render() {
		if (this.props.isLoggedIn) {
			return (
				<Dashboard token={this.state.token}/>
			)
		} else {
			return (
				<div className="welcomePage">
					<a href="http://localhost:8888">
						<button>Login with Spotify</button>
					</a>
				</div>
			)
		}
	}
};

const mapStateToProps = state => {
	return {
		isLoggedIn: state.token ? true : false,
		token: state.token
	}
}
export default connect(mapStateToProps)(App);