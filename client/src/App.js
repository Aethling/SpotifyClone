import React, { Component } from 'react';
// import Spotify from 'spotify-web-api-js';
import { connect } from 'react-redux'
import Dashboard from './components/Dashboard';
import { setToken } from './actions/tokenActions';
import { getUser } from './actions/user';

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
	    	localStorage.setItem('token', hashParams.access_token);
	    } else {
	    	let localToken = localStorage.getItem('token')
	    	if (localToken) {
	    	this.props.dispatch(setToken(localToken));
		    }
		  }
		  //resets local storage after 1 hour
			let	values = new Array();
			const	oneday = new Date();
			oneday.setHours(oneday.getHours() + 1); //one hour from now
    	let localToken = localStorage.getItem('token')
			values.push(localToken);
			values.push(oneday);
			try {
			  localStorage.setItem(0, values.join(";"));
			} 
			catch (e) { }
			//check if past expiration date
			let theValues = localStorage.getItem(0).split(";");
			if (theValues[1] < new Date()) {
			    localStorage.removeItem(0);
			}
	}
	componentDidMount(){
		if(!this.props.isLoggedIn){
			this.extractHashParams();
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.props.dispatch(getUser(this.props.token))
		}
	}
	//add data we are interested in tracking to an array
 
	render() {
		if (this.props.isUserSuccess) {
			return (
				<Dashboard />
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
		isLoggedIn: state.userReducer.isLoggedIn,
		token: state.userReducer.token,
		isUserSuccess: state.userReducer.isUserSuccess

	}
}
export default connect(mapStateToProps)(App);