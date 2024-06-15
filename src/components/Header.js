import styled from "styled-components";
import SearchButton from "./SearchButton";
import ToggleSwitch from "./ToggleSwitch";

const Header = ({ searchBtn, isDarkMode, setIsDarkMode }) => {
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
    <MainContainer>
      <LogoTxt isDarkMode={isDarkMode}>Weather</LogoTxt>
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

  @media screen and (min-width: 1024px) {
    padding: 10px 10%;
  }
`;

const LogoTxt = styled.h1`
  font-size: 40px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#1f1f1f")};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 576px) {
    gap: 15px;
  }
`;
