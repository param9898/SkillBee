// Import necessary React modules
import React, { useState } from 'react';
import "./Login.scss"

// Login component
const Login = () => {
  // State to store user input (email and password)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., check credentials)

    // For demonstration purposes, let's log the input data
    console.log('Login Data:', loginData);

    // Clear the form after submission
    setLoginData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
