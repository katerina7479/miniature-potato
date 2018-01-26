import { combineReducers } from 'redux';

import SearchReducer from 'Reducers/searchReducer';
import TodoReducer from 'Reducers/todoReducer';
import GeolocationReducer from 'Reducers/geolocReducer'


const CoreReducer = combineReducers({
  todo: TodoReducer,
  search: SearchReducer,
  geolocation: GeolocationReducer,
});

export default CoreReducer;
