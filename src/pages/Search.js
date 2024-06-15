import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Search = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <MainContainer>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        searchBtn={false}
      />
      <SearchSection>
        <Searchbar />
      </SearchSection>
    </MainContainer>
  );
};

export default Search;

const MainContainer = styled.div`
  /* border: 2px solid red; */
  max-height: 100vh;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const SearchSection = styled.div`
  padding: 10px;
  flex-grow: 1;
`;
