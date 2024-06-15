import styled from "styled-components";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const { isDarkMode, setIsDarkMode = { setIsDarkMode } } =
    useContext(ThemeContext);

  return (
    <MainContainer>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <WeatherCard isDarkMode={isDarkMode} />
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
