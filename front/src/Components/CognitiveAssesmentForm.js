import React, { useState } from 'react';
import '../A'


// CognitiveAssessmentForm component
export const CognitiveAssessmentForm = () => {
    const [answers, setAnswers] = useState([]);
  
    const handleAssessment = async (e) => {
      e.preventDefault();
  
      try {
        // Make API request to submit cognitive assessment
        //const response = await axios.post('/assessments', { answers });
        console.log(response.data); // Handle success response
      } catch (error) {
        console.error(error); // Handle error response
      }
    };
  
    const handleAnswerChange = (index, value) => {
      const newAnswers = [...answers];
      newAnswers[index] = value;
      setAnswers(newAnswers);
    };
  
    return (
      <form onSubmit={handleAssessment}>
        <h2>Cognitive Assessment Form</h2>
        {/* Render question inputs dynamically */}
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <input
              type="text"
              value={answers[index] || ''}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  };