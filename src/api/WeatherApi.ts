import { API_KEY, BASE_URL } from "../config";

export default {
  getByLocation(location: string): Promise<Response> {
    return fetch(`${BASE_URL}q=${location}&appid=${API_KEY}`);
  },
};
