import React, { Component } from 'react';
// import Spotify from 'spotify-web-api-js';
import { connect } from 'react-redux'
import Dashboard from './components/Dashboard';
import { setToken } from './actions/tokenActions';
import { fetchUser } from './actions/user';

//call gethashParams in constructor and sets the token
//and the logged in
//action to set token
//action to see if logged in or not

class App extends Component {

	extractHashParams() {

	    var hashParams = {};
	    var e, r = /([^&;=]+)=?([^&;]*)/g,
	        q = window.location.hash.substring(1);
	    while ( e = r.exec(q)) {
	       hashParams[e[1]] = decodeURIComponent(e[2]);
	    }
	    // return hashParams;
	    if (hashParams.access_token) {
	    	this.props.dispatch(setToken(hashParams.access_token));
	    } 
	}
	componentDidMount(){
		if(!this.props.isLoggedIn){
			this.extractHashParams();
		}
	}
	componentDidUpdate(prevprops) {
		if (!this.props.isLoggedIn) {
			if(nextprops.token) {
				this.props.dispatch(getUser(nextprops.token))
			}
			console.log("updated");
		}
	}
 
	render() {
		console.log(this.props);
		if (this.props.isLoggedIn) {
			return (
				<Dashboard token={this.props.token}/>
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
		isLoggedIn: state.isLoggedIn,
		token: state.token

	}
}
export default connect(mapStateToProps)(App);