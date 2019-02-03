import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Browse from '../pages/browse';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../App';
import Artists from '../pages/Artists';
// import PrivateRoute from '../config/utils';


const PrivateRoute = ({ component: Component, user }) => (
  <Route render={props => (user ? <Component {...props} /> : <Redirect to="/" />)} />
);

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={Login} exact={true} />
				<PrivateRoute path="/browse" component={Browse} />
				<PrivateRoute path="/artists" component={Artists} />
        <PrivateRoute path="/notfound" component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;