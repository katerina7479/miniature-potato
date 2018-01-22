import React from 'react';
import TodoList from 'Components/TodoList';

import Controls from 'Components/Controls';
//import Search from 'Components/Search';


class TodoApp extends React.Component {

	render() {
		return (
			<div className="card w-50 mx-auto p-3 mt-1">
				<div className="card-block">
					<h1 className="card-title">My Todos</h1>
					<Controls />
					<TodoList />
				</div>
			</div>
		)
	}
}

export default TodoApp;
