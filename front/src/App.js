import './App.css';
import './Components/CognitiveAssesmentForm'
import { GameRecommendation } from './Components/GameRecommendation';
//import { CognitiveAssessmentForm } from './Components/CognitiveAssesmentForm';
import'./Components/LoginFormComponent'
import { LoginForm } from './Components/LoginFormComponent';
import './Components/RegistrationFormComponent'
import { RegistrationForm } from './Components/RegistrationFormComponent';
function App() {
  return (
    <div className="App">
      
      <RegistrationForm/>
      <LoginForm/>
      <GameRecommendation/>
      
    </div>
  );
}

export default App;
