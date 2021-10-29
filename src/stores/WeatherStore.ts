import { atom, selector } from "recoil";
import { IWeather } from "../models";
import { WeatherService } from "../services";

// recoil atoms - one piece of state for your application
// ex: storing current location of user, user preferences

// stores the current location of the user
// set to Richmond by default
export const currentLocation = atom<string>({
  key: "currentLocation",
  default: "Richmond",
});

// recoil selectors - derive state from the atoms and automatically refresh when subscribed.
// ex:

// gets the current location from the atom above
// then makes a call to the weather service for the data for that specific location
// calling the "get" function on currentLocation automatically subscribes to that atom
// so anytime that atom updates, this selector will also rerun and all of the components
// that use this data will refresh automatically
export const getWeatherByLocation = selector<IWeather>({
  key: "getWeatherByLocation",
  get: ({ get }) => {
    const location = get(currentLocation);
    return WeatherService.getWeatherByLocation(location);
  },
});
