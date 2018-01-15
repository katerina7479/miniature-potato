import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise';

import TodoApp from 'Components/TodoApp';
import CoreReducer from 'Reducers/reducers';

const middleware = [promise];
const store = createStore(
	CoreReducer,
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(...middleware)),
);

// Call it
ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
  	document.getElementById('app')
);
