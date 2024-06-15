import { useEffect } from "react";

const CurrentLocation = ({ setLocation, setLocationError }) => {
  const getCurrentLocation = () => {
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
              setLocationError("User denied the request for Geolocation");
              break;
            case err.POSITION_UNAVAILABLE:
              setLocationError("Location information is unavailable");
              break;
            case err.TIMEOUT:
              setLocationError("The request to get user location timed out");
              break;
            case err.UNKNOWN_ERROR:
              setLocationError("An unknown error occured");
              break;
            default:
              setLocationError("An unknown error occured");
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser");
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div>CurrentLocation</div>;
};

export default CurrentLocation;
