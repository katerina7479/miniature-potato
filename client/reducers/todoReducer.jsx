import {
	FETCH_TODOS_REQUEST,
	FETCH_TODOS_SUCCESS,
	FETCH_TODOS_FAILURE,

	ADD_TODO_REQUEST,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAILURE,

	UPDATE_TODO_SUCCESS,
	UPDATE_TODO_REQUEST,
	UPDATE_TODO_FAILURE,

	DELETE_TODO_REQUEST,
	DELETE_TODO_SUCCESS,
	DELETE_TODO_FAILURE,
} from 'Actions/actions';

const initialState = {
	todos: [],
	error: undefined,
	isFetching: false,
	isSubmitting: undefined,
};


function TodoReducer(state = initialState, action) {

	switch (action.type) {
		case FETCH_TODOS_REQUEST: {
			return {
				todos: [...state.todos],
				isFetching: true,
				error: undefined,
				isSubmitting: undefined,
			};
		}
		case FETCH_TODOS_SUCCESS: {
			return {
				...state,
				todos: [...action.payload],
				isFetching: false,
				error: undefined
			}
		}
		case FETCH_TODOS_FAILURE: {
			return {
				...state,
				todos: undefined,
				isFetching: false,
				error: { ...action.payload }
			}
		}
		case UPDATE_TODO_REQUEST:
		case DELETE_TODO_REQUEST:
		case ADD_TODO_REQUEST: {
			return {
				...state,
				todos: [...state.todos],
				error: undefined,
				isSubmitting: true,
			}
		}
		case UPDATE_TODO_SUCCESS:
		case DELETE_TODO_SUCCESS: {
			return {
				...state,
				error: undefined,
				isSubmitting: state.todos ? false : undefined,
			}
		}
		case ADD_TODO_SUCCESS: {
			return {
				todos: [...state.todos],
				error: undefined,
				isSubmitting: false,
			}
		}
		case DELETE_TODO_FAILURE:
		case UPDATE_TODO_FAILURE:
		case ADD_TODO_FAILURE: {
			return {
				...state,
				todos: undefined,
				error: {...action.payload},
				isSubmitting: undefined,
			}
		}
		default:
			return {
			...state
		}
	}
}

export default TodoReducer;
