import React, { useState } from 'react';


// LoginForm component
export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
     // try {
        // Make API request to authenticate user
        //const response = await axios.post('/users/login', { username, password });
        //console.log(response.data); // Handle success response
      //} catch (error) {
      //  console.error(error); // Handle error response
      //}
    };
  
    return (
      <form onSubmit={handleLogin}>
        <h2>Login Form</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  };
  