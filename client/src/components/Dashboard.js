import React, { Component } from 'react';
import SideMenu from './sidemenu/SideMenu';
import Browse from '../pages/browse';
import Artists from '../pages/Artists';
import Home from '../pages/home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

class Dashboard extends Component {
	state = {
			myData: null,
			isLoading: true,
			browseData: null,
			nowPlaying: null
		}

	componentDidMount() {

		fetch('https://api.spotify.com/v1/me', {
			headers: {'Authorization': 'Bearer ' + this.props.token}
		})
			.then(checkStatus)
			.then(blob => blob.json())
			.then(data => this.setState({myData: data, isLoading: false}))

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

		function getNowPlaying(props) {
			if (props.token) {
					spotifyWebApi.setAccessToken(props.token);
			}
			console.log(spotifyWebApi.setAccessToken);
	  	spotifyWebApi.getMyCurrentPlaybackState()
	  		.then((response) => {
	  			//console.log the response to see all useful info to use;
	  			console.log(response);
	  			this.setState({
	  				nowPlaying: {
	  					name: response.item.name,
	  					image: response.item.album.images[0].url 
	  				}
	  			})
	  		})
	  }
		
	}
	// getNowPlaying(props);


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
			)
	} else { 
		console.log(this.state);
		
		if (this.state.browseData) {
			          	// <Browse browseData={this.state.browseData}/>
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
									<Route path="/" exact render={ () => <Home myData={this.state.myData}/>}/>
									<Route path="/browse" render={ () => <Browse browseData={this.state.browseData}/> }/>
									<Route path="/artists" component={Artists} />
					        <Route path="/notfound" component={NotFoundPage} />
								</Switch>

								</div>
							</div>
						</div>	
					</BrowserRouter>

        </div>
			       
			)
		} else {
			return (
				<div>
					<h2>Loading Data</h2>
				</div>
			)
		}
	}
}
}
export default Dashboard