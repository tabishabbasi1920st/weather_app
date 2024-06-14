import styled from "styled-components";
import Header from "../components/Header";
import WeatherDisplay from "../components/WeatherDisplay";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Home = () => {
  const { isDarkMode, setIsDarkMode = { setIsDarkMode } } =
    useContext(ThemeContext);

  return (
    <MainContainer>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <WeatherDisplay />
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  /* border: 2px solid red; */
  max-height: 100vh;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
