import { combineReducers } from 'redux';

import SearchReducer from 'Reducers/searchReducer';
import TodoReducer from 'Reducers/todoReducer';


const CoreReducer = combineReducers({
  todo: TodoReducer,
  search: SearchReducer,
});

export default CoreReducer;
