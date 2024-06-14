import styled from "styled-components";
import Searchbar from "./Searchbar";

const WeatherDisplay = ({ isDarkMode }) => {
  return (
    <MainContainer>
      <Searchbar isDarkMode={isDarkMode} />
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
  padding: 10px;

  @media screen and (min-width: 1024px) {
    padding: 10px 10%;
  }
`;

const WeatherCard = styled.div`
  /* border: 2px solid blue; */
  flex-grow: 1;
  overflow: hidden;
`;
