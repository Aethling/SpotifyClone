import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Browse from '../pages/browse';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../App';
import Artists from '../pages/Artists';
import Home from '../pages/home';
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
				<PrivateRoute path="/browse" component={Browse} />
				<PrivateRoute path="/artists" component={Artists} />
        <PrivateRoute path="/notfound" component={NotFoundPage} />
			</Switch>
			
			</div>
			</div>

		</div>
	</BrowserRouter>
);

export default AppRouter;