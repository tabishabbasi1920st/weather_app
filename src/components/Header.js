import styled from "styled-components";
import SearchButton from "./SearchButton";
import ToggleSwitch from "./ToggleSwitch";
import { useNavigate } from "react-router-dom";

const Header = ({ searchBtn, isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  const renderSearchButton = () => {
    switch (searchBtn) {
      case undefined:
        return <SearchButton />;
      case true:
        return <SearchButton />;
      case false:
        return null;
      default:
        return;
    }
  };

  return (
    <MainContainer isDarkMode={isDarkMode}>
      <LogoTxt isDarkMode={isDarkMode} onClick={() => navigate("/")}>
        Weather
      </LogoTxt>
      <Wrapper>
        {renderSearchButton()}
        <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </Wrapper>
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
  box-shadow: ${({ isDarkMode }) => !isDarkMode && "1px 1px 5px 1px #bfbfbf"};

  @media screen and (min-width: 1024px) {
    padding: 10px 10%;
  }
`;

const LogoTxt = styled.h1`
  font-size: 40px;
  color: ${({ isDarkMode }) => (isDarkMode ? "red" : "#1f1f1f")};
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 576px) {
    gap: 15px;
  }
`;
