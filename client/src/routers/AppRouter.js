import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Browse from '../pages/browse';
import Dashboard from '../components/Dashboard';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/" component={Dashboard} exact={true} />
				<Route path="/browse" component={Browse} />
				<Route path="/radio" component={Radio} />
        <Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;