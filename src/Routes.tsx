import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/map" component={OrphanagesMap} />
		</Switch>
	</Router>
);

export default Routes;
