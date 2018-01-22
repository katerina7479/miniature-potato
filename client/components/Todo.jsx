import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from 'Actions/actions';


class Todo extends React.Component {

  static propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    completedAt: PropTypes.string,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      completed: this.props.completedAt !== null,
      deleted: false
    }
  }

  renderDate = (datetime) =>{
    return moment(datetime).format("MMM Do YY");
  };

  renderCompleted = () => {
    const { createdAt } = this.props;
    const completedAt = this.props.completedAt || moment().format();
    if (this.state.completed){
      return <p>Completed: {this.renderDate(completedAt)}</p>
    }
    return <p className="text-light">Started: {this.renderDate(createdAt)}</p>
  };

  handleClick = () => {
    var { completed } = this.state;
    const { updateTodo, id, text } = this.props;
    this.setState({
      completed: !completed
    });
    const newCompletedAt = !completed ? moment().format() : null;
    updateTodo(id, {completedAt: newCompletedAt, text});
  };

  handleDelete = () => {
    const { id, deleteTodo, fetchTodos } = this.props;
    console.log("Deleting", id, this.props);
    this.setState({
      deleted: true
    });
    deleteTodo(id);
  };

  render() {
    var { text } = this.props;
    var { completed, deleted } = this.state;
    if(deleted){
      return null
    }
    const completedClass = completed ? 'card-secondary' : 'card-inverse card-primary';
    return (
      <div className={"card card-body w-75 mb-3 " + completedClass}>
        <button
            type="button"
            className="close"
            aria-label="Close"
            style={{position: 'absolute', top:'0px', right: '0px'}}
            onClick={this.handleDelete}
        >
          <span className={!completed ? "text-light" : ""} aria-hidden="true">&times;</span>
        </button>
        <div className="card-block mt-2" onClick={this.handleClick}>
          <h4 className="card-title">{text}</h4>
          {this.renderCompleted()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTodo: updateTodo(dispatch),
  deleteTodo: deleteTodo(dispatch),
});

const mapStateToProps = (state, ownProps) => ({
  ...state
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todo);
