import React from 'react';
import TodoList from 'Components/TodoList';
//import Controls from 'Components/Controls';
//import Search from 'Components/Search';


class TodoApp extends React.Component {

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column large-5 medium-6 small-centered">
              <div className="container">
                <TodoList />
              </div>
          </div>
      </div>
    </div>
    )
  }
}

export default TodoApp;
