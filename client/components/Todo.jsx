var React = require('react');
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

var moment = require('moment');
var actions = require('Actions/actions');

class Todo extends React.Component {

  static propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
    toggleTodoCompleted: PropTypes.function.isRequired,
  };

  render() {
    var { id, text, completed } = this.props;

    var renderCompleted = () => {
      if (completed) {
        return <p className="todo_subtext">Completed: {renderDate(completedAt)}</p>
      }
    };
    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input id="{id}" type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          {renderCompleted()}
        </div>
      </div>
    );
  }
}

export default Todo;
