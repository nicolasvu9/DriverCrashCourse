import React, { useState } from 'react';
import './loginPage.css';
import logo from './logo.png';
const USERS = ['gwen']; // Simulated database for username uniqueness check

const Header = () => (
  <header>
    <img src={logo} alt="Logo" width="40px" />
  </header>
);

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="login-username">Username: </label>
          <input
            id="login-username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="login-password">Password: </label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignup(username, password);
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="signup-username">Username: </label>
          <input
            id="signup-username"
            type="text"
            placeholder="Create username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="signup-password">Password: </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Your Website Name</p>
  </footer>
);

const LoginPage = () => {
  const handleLogin = (username, password) => {
    console.log('Login attempt:', username, password);
  };

  const handleSignup = (username, password) => {
    if (USERS.includes(username)) {
      alert('Username already exists.');
      return;
    }
    USERS.push(username);
    console.log('Signup successful:', username, password);
  };

  return (
    <div>
    <body>
      <Header />
      <div className="forms-container">
        <LoginForm onLogin={handleLogin} />
        <div className="vertical-line"></div>
        <SignupForm onSignup={handleSignup} />
      </div>
      <Footer />
      </body>
    </div>
  );
};

export default LoginPage;
