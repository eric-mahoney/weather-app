import { ChangeEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentLocation, getWeatherByLocation } from "../stores/WeatherStore";

const Weather = () => {
  // sets the current location in the recoil store
  const setCurrentLocation = useSetRecoilState(currentLocation);

  // if the recoil current location is updated vvv this guy automatically runs and gets you the new current weather
  const currentWeather = useRecoilValue(getWeatherByLocation);

  // handles changing the location when the input loses focus (onBlur)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentLocation(e.target.value);
  };

  return (
    <>
      <p>
        current weather: {currentWeather.name} - {currentWeather.main.temp}
      </p>
      <input placeholder="search for weather" onBlur={handleChange} />
    </>
  );
};

export default Weather;
