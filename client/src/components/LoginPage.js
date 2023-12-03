import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import logo from './logo.png';
import Footer from './Footer'

const Header = () => (
  <header>
    <img src={logo} alt="Logo" width="40px" />
  </header>
);

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
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

const SignupForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (username, password) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        if (data.msg && data.msg.includes('E11000')) {
          throw new Error('Username already exists. Please try a different one.');
        }
        throw new Error('Signup failed. Please try again.');
      }
      await onLogin(username, password);
    } catch (error) {
      window.alert(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup(username, password);
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


const LoginPage = () => {
  const navigate = useNavigate(); // Create an instance of useNavigate
  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      Cookies.set('access_token', data.access_token);
      Cookies.set('user_role', data.role);

      // Check if the role is 'admin' and redirect
      if (data.role === 'admin') {
        navigate('/admin');
      } else {
        // Handle non-admin login if necessary
        navigate('/dashboard');
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="forms-container">
        <LoginForm onLogin={handleLogin} />
        <div className="vertical-line"></div>
        <SignupForm onLogin={handleLogin} />
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
