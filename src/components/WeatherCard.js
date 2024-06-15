import styled from "styled-components";
import { useState } from "react";
import CurrentLocation from "./CurrentLocation";
import CurrentLocationWeather from "./CurrentLocationWeather";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const WeatherCard = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [locationError, setLocationError] = useState(null);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [weatherData, setWeatherData] = useState({});

  console.log(location, locationError, apiStatus, weatherData);

  const renderCurrentLocationWeather = () => {
    if (location.lat !== null && locationError === null) {
      return (
        <CurrentLocationWeather
          location={location}
          setWeatherData={setWeatherData}
          setApiStatus={setApiStatus}
        />
      );
    }
  };

  return (
    <MainContainer>
      <CurrentLocation
        setLocation={setLocation}
        setLocationError={setLocationError}
      />
      {renderCurrentLocationWeather()}
    </MainContainer>
  );
};

export default WeatherCard;

const MainContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;
