// METHODS FOR CONVERTING TEMPERATURE

export const convertTempToFahrenheit = (temperature: number): number => {
  return Math.floor(((temperature - 273.15) * 9) / 5 + 32);
};

export const convertTempToCelcius = (temperature: number): number => {
  return Math.floor(temperature - 273.15);
};
