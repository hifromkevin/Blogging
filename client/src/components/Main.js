import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Contact from './Contact';

const Main = () => (
	<main>
		<Switch>
			<Route exact path ='/' component={ Dashboard } />
			<Route exact path ='/about' component={ About } />			
			<Route exact path ='/contact' component={ Contact } />
		</Switch>
	</main>
);

export default Main;