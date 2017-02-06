import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // The action here is not the promise anymore...
  // While the promise arrives from the action creator to this reducer it becomes the actual HTTP response!
  // This is what redux-promise does. It is a middleware.
  // Middleware has the ability to manipulate actions before they arrive to the reducer(s)
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]); Cannot mutate state (e.g. state.push), must return a new state object!
    return [ action.payload.data, ...state ]; // ES6 (...state) -> take all elements from the state array and insert them...
  }

  return state;
}