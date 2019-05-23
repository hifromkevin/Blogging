import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

import '../dist/styles/style.sass';

render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('app'));