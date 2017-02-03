import axios from 'axios';

const OPENWEATHERMAP_API_KEY = '526e196faac9f87875c8d751bef82d78';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API_KEY}`; // ES6 template string

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creators have to return an action (which is an object)
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // Sends an AJAX request and returns a promise

  return {
    type: FETCH_WEATHER, // An action has to have a type
    payload: request
  };
}