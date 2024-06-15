import { useEffect } from "react";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const CurrentLocationWeather = ({ location, setWeatherData, setApiStatus }) => {
  useEffect(() => {
    fetchCurrentLocationWeather();
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
  return;
};

export default CurrentLocationWeather;
