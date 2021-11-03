import { atom, selector } from "recoil";
import { WeatherService } from "../services";

export type TemperatureOptions = "Fahrenheit" | "Celcius" | "Kelvin";

export const currentTempSetting = atom<TemperatureOptions>({
  key: "currentTempSetting",
  default: "Fahrenheit",
});

export const currentLocation = atom<string>({
  key: "currentLocation",
  default: "New York City",
});

export const getWeatherByLocation = selector({
  key: "getWeatherByLocation",
  get: ({ get }) => {
    const location = get(currentLocation);
    return WeatherService.getWeatherByLocation(location);
  },
});
