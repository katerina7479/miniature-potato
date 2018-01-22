import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from 'Actions/actions';


class Controls extends React.Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      text: undefined
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { addTodo } = this.props;
    const { text } = this.state;
    if (text.length > 0) {
      addTodo({text});
    } else {
      this.setState({
        text: undefined
      });
    }
  };

  handleChange = (event) => {
    this.setState({text: event.target.value});
  };

  render() {
    return (
        <form onSubmit={this.onSubmit}>
          <div className="form-group row p-3">
          <input
              type="text"
              placeholder="Add Todo"
              value={this.state.text}
              onChange={this.handleChange}
          />
          <button type="submit" className="button expanded">Submit</button>
          </div>
        </form>
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
