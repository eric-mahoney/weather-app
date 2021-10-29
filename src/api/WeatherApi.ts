import { API_KEY, BASE_URL } from "../config";

export default {
  // makes the intial request to the api for the weather data
  getByLocation(location: string): Promise<Response> {
    return fetch(`${BASE_URL}q=${location}&appid=${API_KEY}`);
  },
};
