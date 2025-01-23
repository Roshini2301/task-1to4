<<<<<<< HEAD
import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

const fakeApi = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.8 },
  { id: 3, name: 'Carrot', price: 2.0 },
  { id: 4, name: 'Dragonfruit', price: 3.5 },
  { id: 5, name: 'Eggplant', price: 2.3 },
  { id: 6, name: 'Fig', price: 2.8 },
  { id: 7, name: 'Grape', price: 1.2 },
  { id: 8, name: 'Honeydew', price: 3.0 },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = useMemo(() => {
    return fakeApi.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Function to clear the search term
  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return (
    <div className="App">
      <h1>Filterable Product List</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
        />
        <button onClick={clearSearch}>Clear</button>
      </div>
      <h2>Products Found: {filteredProducts.length}</h2>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.name}</span> - <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
=======
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
>>>>>>> 16e2b0cc783658f52b20d7592df30dfbdc155904
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default WeatherApp;
>>>>>>> 16e2b0cc783658f52b20d7592df30dfbdc155904
