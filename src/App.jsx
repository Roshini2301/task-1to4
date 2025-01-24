import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  
  // Fake API data fetching
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.sampleapis.com/movies/animation');
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Netflix</h1>
      </header>
      
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.posterURL} alt={movie.title} className="movie-image" />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-description">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
