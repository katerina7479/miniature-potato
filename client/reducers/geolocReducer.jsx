import { SET_GEOLOCATION } from 'Actions/geolocation';


const initialState = {
  coords: undefined,
};


function GeolocationReducer(state = initialState, action) {
  switch (action.type) {

    case SET_GEOLOCATION: {
    	return {
			coords: {...action.payload}
		}
	}
    default:
      return state;
  }
}

export default GeolocationReducer;
