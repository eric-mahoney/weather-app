import { WeatherApi } from "../api";
import { IWeather } from "../models";

export default {
  async getWeatherByLocation(location: string): Promise<IWeather> {
    const response = await WeatherApi.getByLocation(location);
    return response.json();
  },
};
