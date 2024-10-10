import './App.css'

import Question from './components/Question';
import Count from "./components/Count";
import { useState } from 'react';

function App() {
  const [currQuestion, setCurrQuestion] = useState(1);

  const handleOnPrev = () => {
    if(currQuestion !== 1)
      setCurrQuestion(currQuestion - 1);
  }

  const handleOnNext = () => {
    if(currQuestion !== 20)
      setCurrQuestion(currQuestion + 1);
  }

  return (
    <div className="App">
      <div className="level-component">
        <div id="level-heading" style={{fontSize: '50px', fontWeight: 'bold', color: '#56a5eb'}}>Quiz App</div>
      </div>
      <div className="question-component"><Question questionNumb={currQuestion}/></div>
      <div className="count-component"><Count/></div>
      <div className="move-btn-container">
        <button className="move-btn" onClick={handleOnPrev}>Prev</button>
        <button className="move-btn" onClick={handleOnNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
