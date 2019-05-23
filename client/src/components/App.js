import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			name: 'Henry'
		}
	}

	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}
};