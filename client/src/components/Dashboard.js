import React, { Component } from 'react';
import SideMenu from './sidemenu/SideMenu';
import Browse from '../pages/browse';
import Home from '../pages/home';
import AppRouter from '../routers/AppRouter';

class Dashboard extends Component {
	state = {
			myData: null,
			isLoading: true,
			browseData: null
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
	}
	 
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
			      <div className='app-container'>

			        <div className='left-side-section'>
			        	<SideMenu token={this.props.token}/>
			        </div>

			        <div className='main-section'>
			          <div className='main-section-container'>
			          	<Home />
			          	<AppRouter token={this.props.token}/>
			          	{this.state.myData ? <img src={this.state.myData.images[0].url}/> : <h2>Loading</h2>  }/>
			          </div>
			        </div>

			      </div>
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