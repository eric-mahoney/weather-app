import { API_KEY, BASE_URL } from "../config";

export default {
  getWeather() {
    return fetch(`${BASE_URL}q=Richmond&appid=${API_KEY}`);
  },
};
