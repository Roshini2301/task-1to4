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

export default App;
