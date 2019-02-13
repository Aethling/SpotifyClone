import React, { Component } from 'react';
import SideMenu from './sidemenu/SideMenu';
import BrowsePage from '../pages/BrowsePage';
import ArtistsPage from '../pages/ArtistsPage';
import HomePage from '../pages/HomePage';
import RecentlyPlayedPage from '../pages/RecentlyPlayedPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import Spotify from 'spotify-web-api-js';

// const spotifyWebApi = new Spotify();

class Dashboard extends Component {
	state = {
			myData: null,
			isLoading: true,
			nowPlaying: null
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
	if (this.state.isLoading) {
		return (
			<div>
				<p>Page is loading</p>
			</div>
			);
	} else { 
		console.log(this.state);
							// <button onClick={this.getNowPlaying}>getNowPlaying</button>
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
									<Route path="/" exact render={ () => <HomePage myData={this.props.token}/>}/>
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
}
export default Dashboard