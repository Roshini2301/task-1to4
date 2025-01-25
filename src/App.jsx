<<<<<<< HEAD
import { useState } from 'react'

import './App.css'
import Auth from './Auth'
import User from './User'
const Authorized=Auth(User);
function App() {
  const user={name:"Tamil"};
  const isAuth=true;


  return (
    <>
    <h1>userprofile</h1>
     <Authorized isAuth={isAuth}user={user}/>
    </>
  )
}

export default App
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [role, setRole] = useState('');
  const [page, setPage] = useState('home');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (
      role === 'admin' &&
      credentials.username === 'Roshini' &&
      credentials.password === 'irene'
    ) {
      setPage('profile');
    } else if (role === 'user' && credentials.username && credentials.password) {
      setPage('profile');
    } else {
      setError('Invalid username or password.');
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <div className="login-container">
            <button onClick={() => setRole('user') || setPage('login')}>User Login</button>
            <button onClick={() => setRole('admin') || setPage('login')}>Admin Login</button>
          </div>
        );
      case 'login':
        return (
          <div className="login-form">
            <h2>{role === 'admin' ? 'Admin Login' : 'User Login'}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
              <button type="submit">Login</button>
            </form>
            <button className="back-button" onClick={() => setPage('home')}>
              Back
            </button>
          </div>
        );
      case 'profile':
        return role === 'user' ? (
          <div className="profile">
            <h2>Welcome User</h2>
            <p>Your profile is currently under review. For more details, contact admin.</p>
          </div>
        ) : (
          <div className="profile">
            <h2>Welcome Admin</h2>
            <p>Manage the college details and user profiles here.</p>
          </div>
        );
      default:
        return <div className="login-container">Page not found</div>;
    }
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <img
            src="https://i.pinimg.com/236x/51/3d/84/513d840fa6f23cb77391da65004ed54d.jpg"
            alt="Roshini College of Engineering"
            className="logo"
          />
          <ul>
            <li onClick={() => setPage('home')}>Home</li>
            <li onClick={() => setRole('user') || setPage('login')}>User Login</li>
            <li onClick={() => setRole('admin') || setPage('login')}>Admin Login</li>
          </ul>
        </nav>
        <h1>Roshini College of Engineering, Dindigul</h1>
      </header>

      <main>{renderPage()}</main>
    </div>
  );
};
=======
<<<<<<< HEAD
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
=======
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
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    return fakeApi.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.find((item) => item.id === product.id);
      if (isAlreadyInCart) return prevCart;
      return [...prevCart, product];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

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
            <div>
              <span>{product.name}</span> - <span>${product.price.toFixed(2)}</span>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <span>{item.name}</span> - <span>${item.price.toFixed(2)}</span>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
>>>>>>> 8f946a1161eb4c6df7255be63c95b3cdc906a819
>>>>>>> ca676d23969b5978c115641c5c92b386c9c17b4a

export default App;
>>>>>>> a4e975cc9d77effb9186d7f7c64435d47f424d6d
