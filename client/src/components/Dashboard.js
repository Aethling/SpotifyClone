import React, { Component } from 'react';
import SideMenu from './sidemenu/SideMenu';

class Dashboard extends Component {
	state = {
			data: null,
			isLoading: true
		}
	componentDidMount() {

		console.log(this.props.token);
		fetch('https://api.spotify.com/v1/me', {
			headers: {'Authorization': 'Bearer ' + this.props.token}
		})
			.then(checkStatus)
			.then(blob => blob.json())
			.then(data => this.setState({data: data, isLoading: false}))
			.then(() => console.log(this.state.data));
			//this will call a function that displays the data
		
		function checkStatus(response) {
			if (response.ok) {
				return Promise.resolve(response);
			} else {
				return Promise.reject(new Error(response.statusText));
			}
		}
	}
	          // <SideMenu />
	          // <UserPlaylists />
	          // <ArtWork />

	          // <Header />
	          
	            // <MainHeader />
	            // <MainView />

	        // <Footer />
render() {
	if (this.state.isLoading) {
		return (
			<div>
				<p>Page is loading</p>
			</div>
			)
	} else { 
		// console.log(this.state);
		return (
		  <div className='App'>
		      <div className='app-container'>

		        <div className='left-side-section'>
		        	<SideMenu />
		        </div>

		        <div className='main-section'>
		          <div className='main-section-container'> 
		          	<img src={this.state.data.images[0].url}/>
		          </div>
		        </div>

		      </div>
		    </div>
		)
	}
}
}

export default Dashboard