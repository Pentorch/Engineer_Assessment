import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setWeatherData } from "../../../../redux/actions";
import { useEffect } from "react";

export default function WeatherCard() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);
  const API_KEY = "d566bf0dee97398407ee26d3fa1442b2";
  const CITY_NAME = "Indonesia";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
        );
        dispatch(setWeatherData(response.data));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Weather in {CITY_NAME}</h1>
      {weatherData ? (
        <div>
          <div className="text-3xl mb-2">
            {Math.round(weatherData.main.temp)}°C
          </div>
          <div className="text-lg mb-4">
            {weatherData.weather[0].description}
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-lg">Humidity</p>
              <p className="text-xl">{weatherData.main.humidity}%</p>
            </div>
            <div>
              <p className="text-lg">Wind Speed</p>
              <p className="text-xl">{weatherData.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-lg">Loading weather data...</p>
      )}
    </div>
  );
}
