import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Browse from '../pages/browse';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../App';
import Artists from '../pages/Artists';
import PrivateRoute from '../config/utils';



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