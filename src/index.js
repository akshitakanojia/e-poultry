import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import {BrowserRouter as Router} from 'react-router-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import createHistory from 'history/createBrowserHistory'
import { store, persistor } from './redux/store'
import ScrollToTop from './components/ScrollToTop';

const history = createHistory()

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<ScrollToTop />
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
