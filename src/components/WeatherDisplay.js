import styled from "styled-components";
import Searchbar from "./Searchbar";
import CurrentLocationCoords from "./CurrentLocationCoords";
import { useEffect, useState } from "react";

const WeatherDisplay = ({ isDarkMode }) => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  console.log("Location", location);
  console.log("Error", error);

  return (
    <MainContainer>
      <Searchbar isDarkMode={isDarkMode} />
      <CurrentLocationCoords setLocation={setLocation} setError={setError} />
      <WeatherCard></WeatherCard>
    </MainContainer>
  );
};

export default WeatherDisplay;

const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    padding: 10px 10%;
  }
`;

const WeatherCard = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;
