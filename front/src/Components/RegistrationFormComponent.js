import React, { useState } from 'react';


// RegistrationForm component
 export const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // Make API request to register user
      //const response = await axios.post('/users/register', { username, password });
     // console.log(response.data); // Handle success response
   } catch (error) {
      console.error(error); // Handle error response
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <h2>Registration Form</h2>
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
      <button type="submit">Register</button>
    </form>
  );
};
 
