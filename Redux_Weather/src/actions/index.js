import axios from "axios";

const API_KEY = "25a6eaa7aec54141177ae3ce879d9c40";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log("Requesting...", request);
	return {
		type: FETCH_WEATHER,
		payload: request

	};
}