import styled from "styled-components";
import Searchbar from "./Searchbar";

const WeatherDisplay = () => {
  return (
    <MainContainer>
      <Searchbar />
      <WeatherCard></WeatherCard>
    </MainContainer>
  );
};

export default WeatherDisplay;

const MainContainer = styled.div`
  /* border: 2px solid green; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const WeatherCard = styled.div`
  border: 2px solid green;
  flex-grow: 1;
  overflow: hidden;
`;
