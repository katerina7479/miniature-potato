import api from 'Api/TodoAPI';
import { createAsyncAction } from 'Utils/helpers';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';


export const getTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});

export const getTodosSuccess = response => ({
  type: FETCH_TODOS_SUCCESS,
  payload: response.data
});

export const getTodosFailure = response => ({
  type: FETCH_TODOS_FAILURE,
  payload: response.error,
});

export const fetchTodos = createAsyncAction(
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  api.getTodos,
);
