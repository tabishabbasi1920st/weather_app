import styled from "styled-components";
import Header from "../components/Header";
import WeatherDisplay from "../components/WeatherDisplay";

const Home = () => {
  return (
    <MainContainer>
      <Header />
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
