import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom';

import Login from '../scenes/LoginScreen/LoginScreen.jsx';

const Routers = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			{/* <Route path="/dashboard" component={Dashboard} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routers;