import React from 'react';
import {Link} from 'react-router-dom';


class Navigation extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					<img src="/static/img/light_logo.png"
						 width="30"
						 height="30"
						 className="d-inline-block align-top"
						 alt="logo"/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon" />
  				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to="/client" className="nav-link">Todo App</Link>
					</li>
					<li className="nav-item">
						<Link to="/client/location" className="nav-link">Location</Link>
					</li>
					<li className="nav-item">
						<Link to="/client/page_two" className="nav-link">Page Two</Link>
					</li>
				</ul>
					<div className="nav navbar-nav navbar-right">
               			<a href="/logout" className="navbar-brand">Logout</a>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navigation;
