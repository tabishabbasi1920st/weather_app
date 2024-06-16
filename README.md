# Weather Application

Welcome to the Weather Application! This project is developed as part of Kraftshala’s selection process for the Frontend Developer intern position. The application provides current weather information based on the user's input and current location's weather of the user who is visiting on website includes a dark mode toggle feature.

> Demo: https://tabishweather.netlify.app

## Features

- Multiple city or country or zip code weather in single search eg: India Mumbai 247778
- Display current weather information for the current location of the user with low accuracy in those device which doesn't have gps, like system but in mobile phone it will work on high accuracy.
- Search functionality to fetch weather data for other cities by zip code or city name.
- Display additional weather details such as humidity, wind speed, wind degree, min temp, max temp, Feels like temperature, atmospheric pressure on sea level, cloud percentage, and atmospheric pressure on ground.
- Dark mode and light mode toggle
- Responsive design for various devices

## Routes / Pages

- `/`: The main route that displays the current weather information for the user's location.
- `/search`: The route that handles the search functionality for other cities.
- `NotFound`: The route for invalid path to get user back on the home page.

### Technical Details

| Pages         | Route     | Path       |
| ------------- | --------- | ---------- |
| **Home**      | Home      | /          |
| **Search**    | Search    | /serch     |
| **Not Found** | Not Found | /not-found |

### Functionality

| Page         | Page Details                                           | Navigation                                |
| ------------ | ------------------------------------------------------ | ----------------------------------------- |
| **Home**     | Header - links for Search and Theme Toggle Button      | Search button to navigate on search rotue |
| **Search**   | Header - Theme Toggle Button                           |                                           |
| **NotFound** | Book detailed Info, "Add to cart" Button "Back" Button | Go to Home button to navigate home route  |

### Pages & Components

Home

| Components           | Details                                                                                                                                                                               | State                                           | API(Open weather)                                                                                                                                                                       | Props Accept                                                                                                                                         | UsingContext Api          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Header               | application logo clickable to redirect home page and serch button to redirect search route                                                                                            | -                                               | -                                                                                                                                                                                       |                                                                                                                                                      | -                         |
| ArrowButton          | A button which contain icon of arrows back and forward icon.                                                                                                                          | -                                               | -                                                                                                                                                                                       | isDarkMode : boolean(true,false), arrowType : string("BACK","FORWARD"), executableFunction:Function()                                                | -                         |
| DescriptionCard      | Card to display weather description info like humidity, wind speed and so on                                                                                                          |                                                 | -                                                                                                                                                                                       | card : Object(), isDarkMode : boolean(true,false)                                                                                                    | -                         |
| FetchCurrentLocation | It will fetch user current location while user visit on application                                                                                                                   |                                                 | -                                                                                                                                                                                       | setLocation : function(), setLocationError : function()                                                                                              | -                         |
| Loader               | it will render while application fetching request                                                                                                                                     | -                                               | -                                                                                                                                                                                       | -                                                                                                                                                    | -                         |
| LocationWeather      | it will render over all weather                                                                                                                                                       | -                                               | -                                                                                                                                                                                       | isDarkMode : boolean(true,false), weatherData:Object()                                                                                               | -                         |
| Searchbar            | it has a search input field and search button to fetch search results                                                                                                                 | -                                               | -                                                                                                                                                                                       | isDarkMode : boolean(true,false), executableFunction : function(), searchValue : string, setSearchValue : function(), disabled : boolean(true,false) | -                         |
| SearchButton         | A button to navigate on search route                                                                                                                                                  | -                                               | -                                                                                                                                                                                       |                                                                                                                                                      | -                         |
| ToggleSwitch         | It is used to toggle theme of the application.                                                                                                                                        | -                                               | -                                                                                                                                                                                       | isDarkMode: boolean(true,false), setIsDarkMode : function()                                                                                          | -                         |
| WeatherCard          | This Component is used to render permission allow view, permission deny view, if permission allow then render <LocationWeather/> component to render current location's weather data. | location, locationError, apiStatus, weatherData | `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`                                                                                                 | isDarkMode: boolean(true,false)                                                                                                                      | -                         |
| Home                 | Header, WeatherCard                                                                                                                                                                   | -                                               | -                                                                                                                                                                                       | -                                                                                                                                                    | isDarkMode, setIsDarkMode |
| NotFound             | Header                                                                                                                                                                                | -                                               | -                                                                                                                                                                                       | -                                                                                                                                                    | isDarkMode, setIsDarkMode |
| Search               | Header, Searchbar                                                                                                                                                                     | apiStatus, searhValue, countryCode, weatherData | `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`, `https://api.openweathermap.org/data/2.5/weather?zip=${searchValue},${countryCode}&appid=${apiKey}` | -                                                                                                                                                    | isDarkMode, setIsDarkMode |

## Components

- `App`: The main component that wraps the entire application.
- `Header`: The component that displays the header section with the title, dark mode toggle and a search button to go on search route.
- `WeatherCard`: The component that displays the current weather information and handle user's location permission's allow or deny views and fetch the user's current location weather and show appropriate view like api success, loading, or failure view.
- `Searchbar`: The component that handles the search functionality.
- `LocationWeather`: The component that displays all over weather information.
- `ToggleSwitch`: The component that handles the dark mode toggle functionality.
- `Loader`: The component that displays a loading spinner while the data is being fetched.
- `ArrowButton`: To scroll weather description card's container in large devices.
- `DescriptionCard`: The card to show different weather info like humidity's card, wind speed's card and so on.
- `FetchCurrentLocation`: The component is used to fetch the current location of the user who is visiting on application if location permission allowed.
- `SearchButton`: The button to go on the search route.

## Context

- `ThemeContext`: To make available state of theme isDarkMode or lightMode for all components and routes.

## Utilities

### `Utilities.js`: The file contains various helper functions used throughout the project. These functions simplify common tasks and enhance code reusability.

- `kelvintoCelsius`: It will accept a parameter which is termperature in kelvin than return termperature in celsius.
- `getFormattedData`: It will accept a dateString than return formattedData.
- `getWeatherIcon`: It will accept a desired weather icon name than return weather icon.

## Technologies Used

- HTML
- CSS
- JavaScript (JS)
- React.js
- Fetch for API requests

## Api

- OpenWeatherMap API for fetching weather data.
  -- Reference: https://openweathermap.org/api

## Third-party-packages

- `react-router-dom` : for client-side routing.
- `react-icons` : for icons.
- `date-fns` : for date.
- `dotenv` : for environment variables.
- `react-loader-spinner`: for loading view
- `styled-components` : for styling components
- `uuid` : for unique id of weather cards.

## Future Improvements

- By default if we search weather by zip code it will by default take india as a country but in future we will make country selectable.

## Design Files

- Not Available

### Guidelines

- Followed Github Guidelines
  - Made the commits often and make sure the commit messages are concise and specific
  - Included a README file for explaining the project setup, usage instructions, and any additional information.
- Followed Clean Code Guidelines
- The repo is well-organized and easy to navigate
- The Application handled all the errors

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```
