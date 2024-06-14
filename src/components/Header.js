import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <LogoTxt>Weather</LogoTxt>
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  /* border: 2px solid black; */
  min-height: 60px;
`;

const LogoTxt = styled.h1`
  font-size: 40px;
`;
