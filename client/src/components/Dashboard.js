import React, { Component } from 'react';
import SideMenu from './sidemenu/SideMenu';
import BrowsePage from '../pages/BrowsePage';
import ArtistsPage from '../pages/ArtistsPage';
import AlbumsPage from '../pages/AlbumsPage';
import HomePage from '../pages/HomePage';
import RecentlyPlayedPage from '../pages/RecentlyPlayedPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import { connect } from 'react-redux';
import Header from './header/Header';
import MainHeader from './mainHeader/mainHeader';
import Footer from './footer/Footer';
import Playlists from './playlists/Playlists';



class Dashboard extends Component {


	 
render() {
		return (
		  <div className='App'>
      	<BrowserRouter>
      		<div>
						<div className="left-side-section">
							 <SideMenu />
							 <Playlists />
				    </div>
				    <div className="header">
				    	<Header user={this.props.user}/>
				    </div>
				    <div className="mainHeader">
				    	<MainHeader />
				    </div>
						<div className="main-section">
						<div className="main-section-container">
							<Switch>
								<Route path="/" exact render={ () => <HomePage token={this.props.token}/>}/>
								<Route path="/browse" render={ () => <BrowsePage token={this.props.token}/> }/>
								<Route path="/recent" render={ () => <RecentlyPlayedPage token={this.props.token}/> }/>
								<Route path="/artists" component={ArtistsPage} />
								<Route path="/albums" component={AlbumsPage} />
				        <Route path="/notfound" component={NotFoundPage} />
							</Switch>
						</div>
						</div>
						<Footer />
					</div>	
				</BrowserRouter>

      </div>
		       
		)
	}
}
const mapStateToProps = state => {
	return {
		token: state.userReducer.token,
		user: state.userReducer.user
	}
}
export default connect(mapStateToProps)(Dashboard);