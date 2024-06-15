import { useEffect } from "react";

const CurrentLocationCoords = ({ setLocation, setError }) => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          switch (err.code) {
            case err.PERMISSION_DENIED:
              setError("User denied the request for Geolocation");
              break;
            case err.POSITION_UNAVAILABLE:
              setError("Location information is unavailable");
              break;
            case err.TIMEOUT:
              setError("The request to get user location timed out");
              break;
            case err.UNKNOWN_ERROR:
              setError("An unknown error occured");
              break;
            default:
              setError("An unknown error occured");
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return;
};

export default CurrentLocationCoords;
