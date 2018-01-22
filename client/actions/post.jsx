import api from 'Api/TodoAPI';
import { createAsyncAction } from 'Utils/helpers';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';


export const addTodoRequest = () => ({
  type: ADD_TODO_REQUEST,
});

export const addTodoSuccess = response => ({
  type: ADD_TODO_SUCCESS,
  payload: response.data
});

export const addTodoFailure = response => ({
  type: ADD_TODO_FAILURE,
  payload: response.error,
});

export const addTodo = createAsyncAction(
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  api.addTodo,
);