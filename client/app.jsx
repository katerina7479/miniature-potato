var React = require('react');
var ReactDOM = require('react-dom');
//var TodoApp = require('Components/TodoApp');
var { Provider } = require('react-redux');

//var actions = require('Actions');
//var store = require('configureStore').configure();
//var TodoAPI = require('TodoAPI');

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New State', state);
//   TodoAPI.setTodos(state.todos);
// });

//dispatch existing items
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

// Load foundation
//$(document).foundation();

//Load css
//require('style!css!foundation-sites/dist/foundation.min.css');
//require('style!css!sass!applicationStyle');

// Call it
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);
