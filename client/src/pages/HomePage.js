import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';
// import Spotify from 'spotify-web-api-js';

// const spotifyWebApi = new Spotify();


class HomePage extends Component {

render() {
	return (
		<div>
			{
			this.props.isLoggedIn && this.props.user &&
						<div> 
			    		<h1>{this.props.user.display_name}</h1>
			    		<h3>Followers: {this.props.user.followers.total}</h3>
			    		<img src={this.props.user.images[0].url}/> 
		    		</div>
			}
		</div>
	)
}
}
const mapStateToProps = state => {
		return {
			token: state.userReducer.token,
			user: state.userReducer.user,
			isLoggedIn: state.userReducer.isLoggedIn
		}
	}
export default connect(mapStateToProps)(HomePage);