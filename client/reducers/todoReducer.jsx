import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from 'Actions/actions';

import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
} from 'Actions/post';

const initialState = {
    todos: undefined,
    error: undefined,
    isFetching: false,
    isSubmitting: false,
};


function TodoReducer(state = initialState, action){

  switch (action.type) {
    case FETCH_TODOS_REQUEST: {
      return {
        ...state,
        todos: undefined,
        isFetching: true
      };
    }
    case FETCH_TODOS_SUCCESS: {
      return {
          ...state,
          todos: {...action.payload},
          isFetching: false,
          error: undefined
      }
    }
    case FETCH_TODOS_FAILURE: {
      return {
          ...state,
          error: {...action.payload}
      }
    }
    case ADD_TODO_REQUEST: {
      return {
          ...state,
          todos: undefined,
          error: undefined,
          isSubmitting: true,
      }
    }
    case ADD_TODO_SUCCESS: {
      return {
          ...state,
          todos: undefined,
          error: undefined,
          isSubmitting: false,
      }
    }
    case ADD_TODO_FAILURE: {
      return {
          ...state,
          todos: undefined,
          error: {...action.payload},
          isSubmitting: false,
      }
    }
    default:
      return state;
  }
}

export default TodoReducer;
