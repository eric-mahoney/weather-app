import { atom, selector } from "recoil";
import { IWeather } from "../models";
import { WeatherService } from "../services";

export const currentLocation = atom<string>({
  key: "currentLocation",
  default: "Richmond",
});

export const getWeatherByLocation = selector<IWeather>({
  key: "getWeatherByLocation",
  get: ({ get }) => {
    const location = get(currentLocation);
    return WeatherService.getWeatherByLocation(location);
  },
});
