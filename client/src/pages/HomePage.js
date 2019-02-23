import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/titleActions';


class HomePage extends Component {
	componentDidMount() {
		this.props.dispatch(changeTitle('Home Page'));
	}
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