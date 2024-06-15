import styled from "styled-components";
import { useState } from "react";
import FetchCurrentLocation from "./FetchCurrentLocation";
import CurrentLocationWeather from "./CurrentLocationWeather";

const WeatherCard = ({ isDarkMode }) => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [locationError, setLocationError] = useState(null);

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
    if (location.lat !== null && locationError === null) {
      return (
        <CurrentLocationWeather isDarkMode={isDarkMode} location={location} />
      );
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
