import { SET_SEARCH_TEXT } from 'Actions/actions';


const initialState = {
  searchText: undefined,
  error: undefined,
  isFetching: false,
};


function SearchReducer(state = initialState, action) {
  switch (action.type) {

    case SET_SEARCH_TEXT: {
    	return {
			searchText: action.searchText
		}
	}
    default:
      return state;
  }
}

export default SearchReducer;
