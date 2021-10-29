import { WeatherApi } from "../api";
import { IWeather } from "../models";

export default {
  // retrieves the weather data from the api
  // then waits for the promise to be resolved
  // then returns the json from it
  async getWeatherByLocation(location: string): Promise<IWeather> {
    const response = await WeatherApi.getByLocation(location);
    return response.json();
  },
};
