import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import LocationWeather from "../components/LocationWeather";
import Loader from "../components/Loader";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Search = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [searchValue, setSearchValue] = useState("");
  const [countryCode, setCountryCode] = useState("in");
  const [weatherData, setWeatherData] = useState();

  const getApiUrl = () => {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    if (isNaN(searchValue)) {
      return `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`;
    } else {
      return `https://api.openweathermap.org/data/2.5/weather?zip=${searchValue},${countryCode}&appid=${apiKey}`;
    }
  };

  const fetchCurrentLocationWeather = async () => {
    setApiStatus(apiStatusConstants.inProgress);
    const apiUrl = getApiUrl();
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      setWeatherData(data);
      setApiStatus(apiStatusConstants.success);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  console.log(weatherData);

  const renderFailureView = () => {
    return (
      <FailureViewContainer>
        <WentWrongHeading isDarkMode={isDarkMode}>
          Data Not Found
        </WentWrongHeading>
      </FailureViewContainer>
    );
  };

  const renderLoadingView = () => {
    return (
      <ProgressViewContainer>
        <Loader />
      </ProgressViewContainer>
    );
  };

  const renderAppropriateView = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <LocationWeather isDarkMode={isDarkMode} weatherData={weatherData} />
        );
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        searchBtn={false}
      />
      <SearchSection>
        <Searchbar
          isDarkMode={isDarkMode}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          executableFunction={fetchCurrentLocationWeather}
        />
        <SearchResultContainer>{renderAppropriateView()}</SearchResultContainer>
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
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 10px 10%;
  }
`;

const SearchResultContainer = styled.div`
  flex-grow: 1;
  margin-top: 40px;
`;

const ProgressViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const FailureViewContainer = styled.div`
  /* border: 2px solid blue; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
`;

const WentWrongHeading = styled.h2`
  font-size: 35px;
  font-weight: 400;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;
