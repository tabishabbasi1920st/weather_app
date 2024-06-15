import styled from "styled-components";

// ICONS...

import { FaCloud } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { GiThrustBend } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa6";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FaWater } from "react-icons/fa";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";

import ArrowButton from "./ArrowButton";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DescriptionCard from "./DescriptionCard";
import {
  kelvinToCelsius,
  getFormattedTime,
  getAppropriateIcon,
} from "../utilities/utilities";

const LocationWeather = ({ isDarkMode, weatherData }) => {
  const cardsContainerRef = useRef();

  const { name, dt, main, weather, wind, clouds } = weatherData;
  const { deg, speed } = wind;
  const {
    feels_like,
    grnd_level,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
  } = main;

  const cardsData = [
    {
      id: uuidv4(),
      name: "Wind Speed",
      value: `${speed}km/h`,
      icon: <FaWind fontSize={35} color={isDarkMode ? "#fff" : "#1f1f1f"} />,
    },
    {
      id: uuidv4(),
      name: "Wind Degree",
      value: `${deg}°`,
      icon: (
        <GiThrustBend fontSize={35} color={isDarkMode ? "#fff" : "#1f1f1f"} />
      ),
    },
    {
      id: uuidv4(),
      name: "Humidity",
      value: `${humidity}%`,
      icon: (
        <WiHumidity fontSize={35} color={isDarkMode ? "#fff" : "#1f1f1f"} />
      ),
    },
    {
      id: uuidv4(),
      name: "Min Temp",
      value: `${kelvinToCelsius(temp_min)}°`,
      icon: (
        <FaTemperatureLow
          fontSize={35}
          color={isDarkMode ? "#fff" : "#1f1f1f"}
        />
      ),
    },
    {
      id: uuidv4(),
      name: "Max Temp",
      value: `${kelvinToCelsius(temp_max)}°`,
      icon: (
        <FaTemperatureHigh
          fontSize={35}
          color={isDarkMode ? "#fff" : "#1f1f1f"}
        />
      ),
    },
    {
      id: uuidv4(),
      name: "Feels Like",
      value: `${kelvinToCelsius(feels_like)}°`,
      icon: (
        <MdFaceRetouchingNatural
          fontSize={35}
          color={isDarkMode ? "#fff" : "#1f1f1f"}
        />
      ),
    },
    {
      id: uuidv4(),
      name: "Atm On Sea",
      value: `${pressure}hpa`,
      icon: <FaWater fontSize={35} color={isDarkMode ? "#fff" : "#1f1f1f"} />,
    },
    {
      id: uuidv4(),
      name: "Clouds",
      value: `${clouds.all}%`,
      icon: <FaCloud fontSize={35} color={isDarkMode ? "#fff" : "#1f1f1f"} />,
    },
    {
      id: uuidv4(),
      name: "Atm on Ground",
      value: `${grnd_level}%`,
      icon: (
        <FaArrowUpFromGroundWater
          fontSize={35}
          color={isDarkMode ? "#fff" : "#1f1f1f"}
        />
      ),
    },
  ];

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const renderWeatherDescription = () => {
    return (
      <WeatherDescContainer>
        <ArrowButton
          isDarkMode={isDarkMode}
          arrowType={"BACK"}
          executableFunction={scrollLeft}
        />
        <Cards ref={cardsContainerRef}>
          {cardsData.map((card) => (
            <DescriptionCard
              card={card}
              key={card.id}
              isDarkMode={isDarkMode}
            />
          ))}
        </Cards>
        <ArrowButton
          isDarkMode={isDarkMode}
          arrowType={"FORWARD"}
          executableFunction={scrollRight}
        />
      </WeatherDescContainer>
    );
  };

  return (
    <MainContainer>
      <SuccessViewContainer>
        <LocationNameTxt isDarkMode={isDarkMode}>{name}</LocationNameTxt>
        <Wrapper>
          <SuccessFirstContainer>
            <WeatherIcon>{getAppropriateIcon(weather[0].icon)}</WeatherIcon>
            <MainTempTxt isDarkMode={isDarkMode}>
              {kelvinToCelsius(temp)}
            </MainTempTxt>
            <UnitTxt isDarkMode={isDarkMode}>°C</UnitTxt>
          </SuccessFirstContainer>
          <SuccessSecondContainer>
            <WeatherTxt isDarkMode={isDarkMode}>Weather</WeatherTxt>
            <TimeTxt isDarkMode={isDarkMode}>
              {getFormattedTime(new Date(dt * 1000).toLocaleString())}
            </TimeTxt>
            <WeatherMain isDarkMode={isDarkMode}>{weather[0].main}</WeatherMain>
          </SuccessSecondContainer>
        </Wrapper>
        <WeatherDescHeading isDarkMode={isDarkMode}>
          Weather Description
        </WeatherDescHeading>
        {renderWeatherDescription()}
      </SuccessViewContainer>
    </MainContainer>
  );
};

export default LocationWeather;

const MainContainer = styled.div`
  /* border: 2px solid red; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SuccessViewContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  flex-grow: 1;
  box-shadow: 1px 1px 8px 1px #bfbfbf;

  @media screen and (min-width: 1024px) {
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  /* border: 2px solid blue; */
  @media screen and (min-width: 576px) {
    display: flex;
  }
`;

const SuccessFirstContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  flex-grow: 1;
  /* border: 2px solid red; */
`;

const WeatherDescContainer = styled.div`
  /* border: 2px solid red; */
  margin-top: 20px;
  display: flex;
  flex-grow: 1;
  gap: 10px;
  overflow: hidden;
  margin-top: auto;
`;

const Cards = styled.ul`
  /* border: 2px solid green; */
  flex-grow: 1;
  display: flex;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SuccessSecondContainer = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 20px;

  @media screen and (min-width: 576px) {
    align-items: flex-end;
    margin-top: 0px;
  }
`;

const WeatherTxt = styled.p`
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  font-size: 30px;
`;

const TimeTxt = styled.p`
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  font-size: 20px;
`;

const WeatherMain = styled.p`
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;

const LocationNameTxt = styled.h1`
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  margin-bottom: 20px;
`;

const WeatherIcon = styled.button`
  color: #ffe168;
  border: none;
  background-color: transparent;

  @media screen and (max-width: 576px) {
    font-size: 100px;
    height: 100px;
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 125px;
    height: 125px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 150px;
    height: 150px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 175px;
    height: 175px;
  }
`;

const MainTempTxt = styled.h1`
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  font-size: 40px;
`;

const UnitTxt = styled.p`
  align-self: flex-start;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};

  @media screen and (max-width: 576px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 777px) and (max-width: 1024px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 1025px) {
    margin-top: 60px;
  }
`;

const WeatherDescHeading = styled.h2`
  margin-top: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;
