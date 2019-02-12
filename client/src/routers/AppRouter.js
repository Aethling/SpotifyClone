import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import BrowsePage from '../pages/BrowsePage';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../App';
import ArtistsPage from '../pages/ArtistsPage';
import HomePage from '../pages/HomePage';
import SideMenu from '../components/sidemenu/SideMenu';
// import PrivateRoute from '../config/utils';


//this whole component is currently not being used!

const PrivateRoute = ({ component: Component, user }) => (
  <Route render={props => (!user ? <Component {...props} /> : <Redirect to="/" />)} />
);

const AppRouter = (props) => (
	<BrowserRouter>
		<div>
			 <SideMenu token={props.token}/>
      <div className='main-section'>
      <div className='main-section-container'>

			<Switch>
				<Route path="/" component={Home} exact={true} />
				<PrivateRoute path="/browse" component={BrowsePage} />
				<PrivateRoute path="/artists" component={ArtistsPage} />
        <PrivateRoute path="/notfound" component={NotFoundPage} />
			</Switch>
			
			</div>
			</div>

		</div>
	</BrowserRouter>
);

export default AppRouter;