import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTodos } from 'Actions/actions';
import Todo from 'Components/Todo';


class TodoList extends React.Component {

  static defaultProps = {
    todos: undefined,
    error: undefined,
    isFetching: true,
  };

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      createdAt: PropTypes.string,
      completedAt: PropTypes.string
    })),
    isFetching: PropTypes.bool,
    isSubmitting: PropTypes.bool,
    error: PropTypes.shape({}),
    fetchTodos: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      updated: false
    }
  }

  componentWillMount = () => {
    const { fetchTodos } = this.props;
    fetchTodos();
  };

  componentWillReceiveProps = (nextProps) => {
    const {isSubmitting, fetchTodos} = nextProps;
    console.log('Receiving New props', this.props);
    if(isSubmitting === false){
      console.log('Kicking off a receive props get');
      fetchTodos();
    }
  };

  renderToDo = () => {
    var { todos } = this.props;
    if (!todos) {
      return null
    }
    if (todos.length === 0) {
      return <p className="container_message">Nothing to do, add something!</p>
    }
    return todos.map((todo) => {
        return (
            <Todo key={ todo.id } { ...todo } />
        )
    });
  };

  render() {
    console.log("Render list", this.props.todos);
    return (
        <div>
            {this.renderToDo()}
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
