import { Box, Card, CardContent, Typography, styled } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { useRecoilValue } from "recoil";

import { convertTempToFahrenheit } from "../../constants";
import { dateStringState } from "../../stores/DateStore";
import { getWeatherByLocation } from "../../stores/WeatherStore";

const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: "300px",
}));

const LocationWrapperStyled = styled(Typography)({
  display: "flex",
  alignItems: "center",
});

const WeatherCard = () => {
  const weatherData = useRecoilValue(getWeatherByLocation);
  const currentDate = useRecoilValue(dateStringState);

  const currentTemperature = convertTempToFahrenheit(weatherData.main.temp);
  const { name } = weatherData;
  const { country } = weatherData.sys;

  return (
    <CardStyled>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">Today</Typography>
          <Typography variant="subtitle1">{currentDate}</Typography>
        </Box>
        <Typography variant="h2">{currentTemperature}</Typography>
        <LocationWrapperStyled variant="subtitle1">
          <LocationOnOutlinedIcon fontSize="small" />
          {name}, {country}
        </LocationWrapperStyled>
      </CardContent>
    </CardStyled>
  );
};

export default WeatherCard;
