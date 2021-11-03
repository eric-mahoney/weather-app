import { WeatherApi } from "../api";

export default {
  async getWeatherByLocation(location: string) {
    const response = await WeatherApi.getByLocation();
    return response;
  },
};
