import React, { useState } from 'react';
import './Login.scss';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('Form submitted!');
  
      console.log({"username": username, "password": password});
      const res = await newRequest.post('/auth/login', { "username": username, "password": password });
      
      // Log the entire response object to understand its structure
      console.log('Response:', res);
  
      if (res && res.data) {
        console.log('Data:', res.data);
        window.localStorage.setItem('currentUser', JSON.stringify(res.data));
        navigate('/');
      } else {
        // Handle the case where the response or data is undefined
        console.error('Unexpected response:', res);
        setError('Unexpected response from the server');
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data);
    }
  };
  
  

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="enter username here"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
}

export default Login;
