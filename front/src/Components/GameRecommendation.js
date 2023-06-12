import React, { useState } from 'react';
import Style from style.css;
//import axios from axios;

export const GameRecommendation = () => {
    const [recommendation, setRecommendation] = useState('');
  
    const handleRecommendation = async () => {
      try {
        // Make API request to fetch game recommendation
        const response = await axios.get('/games?userId=123');
        setRecommendation(response.data); // Handle success response
      } catch (error) {
        console.error(error); // Handle error response
      }
    };
  
    return (
      <div>
        <h2>Game Recommendation</h2>
        
        <p>{recommendation}</p>
      </div>
    );
  };