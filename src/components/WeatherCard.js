import styled from "styled-components";
import { useState } from "react";
import FetchCurrentLocation from "./FetchCurrentLocation";
import FetchCurrentLocationWeather from "./FetchCurrentLocationWeather";
import CurrentLocationTemp from "./CurrentLocationTemp";

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
  const [weatherData, setWeatherData] = useState({});

  console.log(location, locationError, apiStatus, weatherData);

  const fetchCurrentLocationWeather = () => {
    if (location.lat !== null && locationError === null) {
      return (
        <FetchCurrentLocationWeather
          location={location}
          setWeatherData={setWeatherData}
          setApiStatus={setApiStatus}
        />
      );
    }
  };

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

  const renderAppropriateView = () => {
    if (locationError !== null) {
      return renderPermissionFailureView();
    }

    return <CurrentLocationTemp />;
  };

  return (
    <MainContainer>
      <FetchCurrentLocation
        setLocation={setLocation}
        setLocationError={setLocationError}
      />
      {fetchCurrentLocationWeather()}
      {renderAppropriateView()}
    </MainContainer>
  );
};

export default WeatherCard;

const MainContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;

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
