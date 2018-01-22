import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTodos } from 'Actions/actions';
import Todo from 'Components/Todo';


class TodoList extends React.Component {
  static defaultProps = {
    todoList: undefined,
    error: undefined,
    isFetching: true,
  };

  static propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool
    })),
    isFetching: PropTypes.bool,
    error: PropTypes.string,
  };

  componentWillMount = () => {
    this.props.fetchTodos();
  };

  getContent = () => {
    var { todoList } = this.props;
    if (!todoList) {
      return <p className="container_message">Nothing To Do</p>
    }
    return todoList.map((todo) => {
      return (
          <Todo key={ todo.id } { ...todo } />
      )
    });
  };

  render() {
    return (
      <div>
        {this.getContent()}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchTodos: fetchTodos(dispatch),
});

const mapStateToProps = (state, ownProps) => state.todo;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
