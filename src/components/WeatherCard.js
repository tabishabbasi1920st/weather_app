import styled from "styled-components";
import { useEffect, useState } from "react";
import FetchCurrentLocation from "./FetchCurrentLocation";
import CurrentLocationWeather from "./CurrentLocationWeather";
import Loader from "./Loader";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const WeatherCard = ({ isDarkMode }) => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [locationError, setLocationError] = useState(null);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [weatherData, setWeatherData] = useState({
    coord: {
      lon: 78.0081,
      lat: 27.1767,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
    base: "stations",
    main: {
      temp: 316.32,
      feels_like: 314.74,
      temp_min: 316.32,
      temp_max: 316.32,
      pressure: 995,
      humidity: 14,
      sea_level: 995,
      grnd_level: 977,
    },
    visibility: 10000,
    wind: {
      speed: 5.21,
      deg: 271,
      gust: 7.03,
    },
    clouds: {
      all: 44,
    },
    dt: 1718455447,
    sys: {
      country: "IN",
      sunrise: 1718409192,
      sunset: 1718459031,
    },
    timezone: 19800,
    id: 1276559,
    name: "Belanganj",
    cod: 200,
  });

  const fetchCurrentLocationWeather = async () => {
    setApiStatus(apiStatusConstants.inProgress);
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const { lat, lng } = location;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      setWeatherData(data);
      setApiStatus(apiStatusConstants.success);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  useEffect(() => {
    if (location.lat !== null && locationError === null) {
      fetchCurrentLocationWeather();
    }
  }, [location]);

  const renderPermissionFailureView = () => {
    const permissionGuidanceViewImg =
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1718437219/location_permission_guidance-min_jmoao7.png";

    return (
      <PermissionFailureViewContainer>
        <LocationGuidanceTxt>
          <h2 style={{ color: isDarkMode ? "#ffe168" : "#707070" }}>
            We are Sorry !!!{" "}
          </h2>
          <br />
          <i style={{ color: isDarkMode ? "#fff" : "#707070" }}>
            To show your current location weather, Please grant your{" "}
            <b>Location Permission.</b>
          </i>
        </LocationGuidanceTxt>
        <p style={{ color: isDarkMode ? "#ffe168" : "#707070" }}>
          <b>Steps:</b>
        </p>
        <ImageContainer>
          <Image src={permissionGuidanceViewImg} />
        </ImageContainer>
      </PermissionFailureViewContainer>
    );
  };

  const renderFailureView = () => {
    return (
      <FailureViewContainer>
        <WentWrongHeading isDarkMode={isDarkMode}>
          Something went wrong
        </WentWrongHeading>
        <RetryButton onClick={fetchCurrentLocationWeather}>Retry</RetryButton>
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
    if (locationError !== null) {
      return renderPermissionFailureView();
    }
    if (location.lat !== null && locationError === null) {
      switch (apiStatus) {
        case apiStatusConstants.success:
          return (
            <CurrentLocationWeather
              isDarkMode={isDarkMode}
              location={location}
              weatherData={weatherData}
            />
          );
        case apiStatusConstants.failure:
          return renderFailureView();
        case apiStatusConstants.inProgress:
          return renderLoadingView();
        default:
          return null;
      }
    }
  };

  return (
    <MainContainer>
      <FetchCurrentLocation
        setLocation={setLocation}
        setLocationError={setLocationError}
      />
      {renderAppropriateView()}
    </MainContainer>
  );
};

export default WeatherCard;

const MainContainer = styled.div`
  flex-grow: 1;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 10px 10%;
  }
`;

const PermissionFailureViewContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const LocationGuidanceTxt = styled.p`
  /* border: 2px solid red; */
  color: #fff;
  font-size: 20px;

  @media screen and (max-width: 576px) {
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  height: 400px;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 10px;
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
  box-shadow: 1px 1px 5px 1px #bfbfbf;
`;

const WentWrongHeading = styled.h2`
  font-size: 35px;
  font-weight: 400;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;

const RetryButton = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  background-color: #ffe168;
  cursor: pointer;
  &:hover {
    background-color: #ffd700;
  }
`;
