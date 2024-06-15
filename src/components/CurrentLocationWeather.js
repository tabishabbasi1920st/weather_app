import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaCloudMeatball } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudShowersWater, FaW } from "react-icons/fa6";
import { FaCloudBolt } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { TbMist } from "react-icons/tb";
import ArrowButton from "./ArrowButton";
import { kelvinToCelsius, getFormattedTime } from "../utilities/utilities";
import { v4 as uuidv4 } from "uuid";
import DescriptionCard from "./DescriptionCard";

import { FaWind } from "react-icons/fa";
import { GiThrustBend } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa6";
import { GiPressureCooker } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FaWater } from "react-icons/fa";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const FetchCurrentLocationWeather = ({ isDarkMode, location }) => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.success);
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

  const cardsContainerRef = useRef();

  const { name, dt, main, weather, wind, clouds } = weatherData;
  const { deg, gust, speed } = wind;
  const {
    feels_like,
    grnd_level,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
  } = main;

  useEffect(() => {
    // fetchCurrentLocationWeather();
  }, []);

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

  console.log(weatherData);

  const renderProgressView = () => {
    return (
      <ProgressViewContainer isDarkMode={isDarkMode}>
        progress view
      </ProgressViewContainer>
    );
  };

  const renderFailureView = () => {
    return (
      <FailureViewContainer isDarkMode={isDarkMode}>
        failure view
      </FailureViewContainer>
    );
  };

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

  const renderAppropriateIcon = (desiredIcon) => {
    const icons = {
      "01d": <FaCircle />,
      "02d": <FaCloudSun />,
      "03d": <FaCloud />,
      "04d": <FaCloudMeatball />,
      "09d": <FaCloudSunRain />,
      "10d": <FaCloudShowersWater />,
      "11d": <FaCloudBolt />,
      "13d": <FaRegSnowflake />,
      "14d": <TbMist />,
    };

    return <WeatherIcon>{icons[desiredIcon]}</WeatherIcon>;
  };

  const renderWeatherDescription = () => {
    const refineData = [
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

    return (
      <WeatherDescContainer>
        <ArrowButton
          isDarkMode={isDarkMode}
          arrowType={"BACK"}
          executableFunction={scrollLeft}
        />
        <Cards ref={cardsContainerRef}>
          {refineData.map((card) => (
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

  const renderSuccessView = () => {
    return (
      <SuccessViewContainer>
        <LocationNameTxt isDarkMode={isDarkMode}>{name}</LocationNameTxt>
        <Wrapper>
          <SuccessFirstContainer>
            {renderAppropriateIcon(weather[0].icon)}
            <MainTempTxt isDarkMode={isDarkMode}>
              {kelvinToCelsius(temp)}
            </MainTempTxt>
            <UnitTxt isDarkMode={isDarkMode}>°C</UnitTxt>
          </SuccessFirstContainer>
          <SuccessSecondContainer>
            <WeatherTxt isDarkMode={isDarkMode}>Weather</WeatherTxt>
            <TimeTxt isDarkMode={isDarkMode}>
              {getFormattedTime(new Date(dt).toLocaleString())}
            </TimeTxt>
            <WeatherMain isDarkMode={isDarkMode}>{weather[0].main}</WeatherMain>
          </SuccessSecondContainer>
        </Wrapper>
        <WeatherDescHeading isDarkMode={isDarkMode}>
          Weather Description
        </WeatherDescHeading>
        {renderWeatherDescription()}
      </SuccessViewContainer>
    );
  };

  const renderAppropriateView = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderProgressView();
      default:
        return null;
    }
  };

  return <MainContainer>{renderAppropriateView()}</MainContainer>;
};

export default FetchCurrentLocationWeather;

const MainContainer = styled.div`
  /* border: 2px solid red; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SuccessViewContainer = styled.div`
  /* border: 2px solid green; */
  padding: 20px;
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

const WindSpeed = styled.p`
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  font-size: 14px;
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

const ProgressViewContainer = styled.div`
  /* border: 2px solid blue; */
  flex-grow: 1;
`;

const FailureViewContainer = styled.div`
  /* border: 2px solid blue; */
  flex-grow: 1;
`;

const WeatherDescHeading = styled.h2`
  margin-top: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;
