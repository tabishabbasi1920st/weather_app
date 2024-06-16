import styled from "styled-components";

const Searchbar = ({
  isDarkMode,
  executableFunction,
  searchValue,
  setSearchValue,
  disabled,
}) => (
  <MainContainer>
    <SearchInput
      isDarkMode={isDarkMode}
      type="text"
      placeholder="Enter city name or zip code.."
      autoFocus
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
    <SearchButton disabled={disabled} onClick={executableFunction}>
      Search
    </SearchButton>
  </MainContainer>
);

export default Searchbar;

const MainContainer = styled.div`
  /* border: 2px solid white; */
  width: 100%;
  height: 50px;
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  box-shadow: 1px 1px 5px 1px #bfbfbf;
  flex-grow: 1;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  outline: none;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#fff" : "transparent"};
`;

const SearchButton = styled.button`
  min-width: 70px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background-color: #ffe168;
  color: #000;
  font-weight: 500;
  cursor: pointer;
  &:disabled {
    background-color: #fff4d4;
  }
`;
