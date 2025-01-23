import React, { useState } from "react";
import "./App.css";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Predefined list of Indian cities
  const cities = [
    { name: "New Delhi" },
    { name: "Mumbai" },
    { name: "Bengaluru" },
    { name: "Chennai" },
    { name: "Kolkata" },
    { name: "Hyderabad" },
    { name: "Pune" },
    { name: "Jaipur" },
    { name: "Ahmedabad" },
    { name: "Surat" },
  ];

  const fetchWeather = async (cityName) => {
    setError("");
    setWeather(null);
    const apiKey = "3fd75ea36d9f5a3d21d327215f6f929a"; // Replace with a valid API key

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      });
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <h2>Click a city to see its weather</h2>
      <ul className="city-list">
        {cities.map((city, index) => (
          <li
            key={index}
            onClick={() => fetchWeather(city.name)}
            className="city-item"
          >
            {city.name}
          </li>
        ))}
      </ul>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-details">
          <h2>Weather in {weather.city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
