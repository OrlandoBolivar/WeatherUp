# WeatherUp
## Task

After obtaining the API Key from [Weather Forecast](https://openweathermap.org/forecast5) and selecting the option that provides with the user criteria of 5 day Weather with the specific API as follows:
```
https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=[API KEY]
```

We sent the request to the server by using the function [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch); which it will then log the information in the console and by using 



**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
```


```
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
```
```
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
```

```
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
