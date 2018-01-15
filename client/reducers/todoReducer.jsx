import {
  TOGGLE_SHOW_COMPLETED,
  ADD_TODO,
  ADD_TODOS,
  TOGGLE_TODO,
} from 'Actions/actions';

const initialState = {
  completed: false,
  error: undefined,
  isFetching: false,
};


function TodoReducer(state = initialState, action){

  switch (action.type) {
    case TOGGLE_SHOW_COMPLETED: {
      return {
        ...state,
        completed: !state.completed
      };
    }
    case ADD_TODO: {
      return {
          ...state
      }
    }
    default:
      return state;
  }
}

export default TodoReducer;
