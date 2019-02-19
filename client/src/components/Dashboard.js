import React, { Component } from 'react';
import SideMenu from './sidemenu/SideMenu';
import BrowsePage from '../pages/BrowsePage';
import ArtistsPage from '../pages/ArtistsPage';
import HomePage from '../pages/HomePage';
import RecentlyPlayedPage from '../pages/RecentlyPlayedPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import { connect } from 'react-redux';
// import Spotify from 'spotify-web-api-js';

// const spotifyWebApi = new Spotify();

class Dashboard extends Component {

	// getNowPlaying = (props) => {
	// 	if (props.token) {
	// 			spotifyWebApi.setAccessToken(props.token);
	// 	}
	// 	console.log(spotifyWebApi.setAccessToken);
 //  	spotifyWebApi.getMyCurrentPlaybackState()
 //  		.then((response) => {
 //  			//console.log the response to see all useful info to use;
 //  			console.log(response);
 //  			this.setState({
 //  				nowPlaying: {
 //  					name: response.item.name,
 //  					image: response.item.album.images[0].url 
 //  				}
 //  			})
 //  		})
 //  }

	// const PrivateRoute = ({ component: Component, user }) => {
	// 	return (
	//   <Route render={props => (!user ? <Component {...props} /> : <Redirect to="/" />)} />
	// )};
	 
render() {
	// if (this.props.isLoading) {
	// 	return (
	// 		<div>
	// 			<p>Page is loading</p>
	// 		</div>
	// 		);
	// } else { 
		return (
		  <div className='App'>
      	<BrowserRouter>
      		<div>
						<div className="left-side-section">
							 <SideMenu token={this.props.token}/>
				    </div>
						<div className="main-section">
						<div className="main-section-container">
							<Switch>
								<Route path="/" exact render={ () => <HomePage token={this.props.token}/>}/>
								<Route path="/browse" render={ () => <BrowsePage token={this.props.token}/> }/>
								<Route path="/recent" render={ () => <RecentlyPlayedPage token={this.props.token}/> }/>
								<Route path="/artists" component={ArtistsPage} />
				        <Route path="/notfound" component={NotFoundPage} />
							</Switch>

							</div>
						</div>
					</div>	
				</BrowserRouter>

      </div>
		       
		)
	}
}
const mapStateToProps = state => {
	return {
		token: state.userReducer.token
	}
}
export default connect(mapStateToProps)(Dashboard);