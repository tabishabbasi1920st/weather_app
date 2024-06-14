import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <MainContainer>
      <LogoTxt isDarkMode={isDarkMode}>Weather</LogoTxt>
      <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    padding: 10px 10%;
  }
`;

const LogoTxt = styled.h1`
  font-size: 40px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;
