import styled from "styled-components";

const Searchbar = ({ isDarkMode, fetchTempDetails }) => (
  <MainContainer>
    <SearchInput
      type="text"
      placeholder="Enter city name or zip code.."
      autoFocus
    />
    <SearchButton onChange={() => fetchTempDetails()}>Search</SearchButton>
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
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
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
`;
