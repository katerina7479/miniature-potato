import React from 'react';
import TodoList from 'Components/TodoList';

import Controls from 'Components/Controls';
//import Search from 'Components/Search';


class TodoApp extends React.Component {

	render() {
		return (
			<div className="container-fluid">
				<div className="row justify-content-md-center mt-3">
					<div className="col"></div>
					<div className="col">
						<h1 className="title">My Todos</h1>
					</div>
						<div className="col"></div>
				</div>
				<div className="row">
					<div className="col-lg-3"></div>
					<div className="col-lg-6">
						<Controls />
					</div>
					<div className="col-lg-3"></div>
				</div>
				<div className="row">
					<div className="col-lg-3"></div>
					<div className="col-lg-6">
						<TodoList />
					</div>
					<div className="col-lg-3"></div>
				</div>
			</div>
		)
	}
}

export default TodoApp;
