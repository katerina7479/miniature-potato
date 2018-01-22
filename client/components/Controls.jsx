import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from 'Actions/post';


class Controls extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = null;
      addTodo(text);
    } else {
      this.refs.todoText.focus();
    }
  };

  render() {
    return (
      <div className="container_footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Add Todo" />
          <button type="submit" className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: addTodo(dispatch),
});

const mapStateToProps = (state, ownProps) => state.todo;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Controls);
