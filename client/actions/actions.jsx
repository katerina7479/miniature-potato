import api from 'Api/TodoAPI';
import {createAsyncAction} from 'Utils/helpers';

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

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';


export const deleteTodoRequest = () => ({
	type: DELETE_TODO_REQUEST,
});

export const deleteTodoSuccess = response => ({
	type: DELETE_TODO_SUCCESS,
	payload: response.data
});

export const deleteTodoFailure = response => ({
	type: DELETE_TODO_FAILURE,
	payload: response.error,
});

export const deleteTodo = createAsyncAction(
	deleteTodoRequest,
	deleteTodoSuccess,
	deleteTodoFailure,
	api.deleteTodo,
);

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

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';


export const updateTodoRequest = () => ({
	type: UPDATE_TODO_REQUEST,
});

export const updateTodoSuccess = response => ({
	type: UPDATE_TODO_SUCCESS,
	payload: response.data
});

export const updateTodoFailure = response => ({
	type: UPDATE_TODO_FAILURE,
	payload: response.error,
});

export const updateTodo = createAsyncAction(
	updateTodoRequest,
	updateTodoSuccess,
	updateTodoFailure,
	api.updateTodo,
);