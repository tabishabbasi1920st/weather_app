import { format, parse } from "date-fns";

export const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15, 1);
};

export const getFormattedTime = (dateString) => {
  const parsedDate = parse(dateString, "M/d/yyyy, h:mm:ss a", new Date());
  const formattedDate = format(parsedDate, "EEEE, h:mm a");
  return formattedDate;
};
