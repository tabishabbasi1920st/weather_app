import { format, parse } from "date-fns";

// ICons..
import { FaCircle } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaCloudMeatball } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudShowersWater } from "react-icons/fa6";
import { FaCloudBolt } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { TbMist } from "react-icons/tb";

export const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15, 1);
};

export const getFormattedTime = (dateString) => {
  const parsedDate = parse(dateString, "M/d/yyyy, h:mm:ss a", new Date());
  const formattedDate = format(parsedDate, "EEEE, h:mm a");
  return formattedDate;
};

export const getAppropriateIcon = (desiredIcon) => {
  const icons = {
    "01d": <FaCircle />,
    "02d": <FaCloudSun />,
    "03d": <FaCloud />,
    "04d": <FaCloudMeatball />,
    "09d": <FaCloudSunRain />,
    "10d": <FaCloudShowersWater />,
    "11d": <FaCloudBolt />,
    "13d": <FaRegSnowflake />,
    "50d": <TbMist />,
    "01n": <FaCircle />,
    "02n": <FaCloudSun />,
    "03n": <FaCloud />,
    "04n": <FaCloudMeatball />,
    "09n": <FaCloudSunRain />,
    "10n": <FaCloudShowersWater />,
    "11n": <FaCloudBolt />,
    "13n": <FaRegSnowflake />,
    "50n": <TbMist />,
  };

  return icons[desiredIcon];
};
