import axios from 'axios';

const OPENWEATHERMAP_API_KEY = '526e196faac9f87875c8d751bef82d78';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API_KEY}`; // ES6 template string

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creators have to return an action (which is an object)
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // Sends an AJAX request and returns a promise
  // redux-promise is a middleware. Middleware has the ability to take actions and manipulate them before they arrive to reducers.
  // redux-promise (axios is redux-promise based) examines the action
  // if the action has a promise as any of it's values, it stops the action entirely, waits for the promise to resolve
  // in our case for the request to return a response
  // and then dispatches a brand new action with the same type but with a payload of the resolved request
  return {
    type: FETCH_WEATHER, // An action has to have a type
    payload: request // We're returning the promise as the payload
  };
}