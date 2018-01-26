// set the step ID from the click
import { createStaticAction } from 'Utils/helpers';
export const SET_GEOLOCATION = 'SET_GEOLOCATION';


export const setGeoLocate = (data) => ({
  type: SET_GEOLOCATION,
  payload: {...data}
});

export const setGeolocation = createStaticAction(setGeoLocate);
