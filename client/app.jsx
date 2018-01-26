import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap';
import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from 'Components/Navigation';
import TodoApp from 'Components/TodoApp';
import Geolocation from 'Components/Geolocation';
import PageTwo from 'Components/PageTwo';

import CoreReducer from 'Reducers/reducers';

const middleware = [promise];
const store = createStore(
	CoreReducer,
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(...middleware)),
);

// Call it
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
  			<div>
				<Navigation />
    			<Route exact path="/client" component={TodoApp}/>
    			<Route path="/client/location" component={Geolocation}/>
				<Route path="/client/page_two" component={PageTwo}/>
			</div>
		</BrowserRouter>
	</Provider>,
  	document.getElementById('app')
);

//<Route path="/page_two" component={PageTwo} />