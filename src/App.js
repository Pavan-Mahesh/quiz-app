import './App.css'
import { useState } from 'react';
import React from 'react'

import MCQ from './components/questionsType/MCQ';
import TrueOrFalse from './components/questionsType/TrueOrFalse';
import TextInput from './components/questionsType/TextInput';
import ImageBased from './components/questionsType/ImageBased';
import Count from "./components/Count";

const Question = ({questionNumb, answers}) => {
  switch(Math.ceil(questionNumb / 5)) {
    case 1: 
      return <MCQ questionNumb={questionNumb} answers={answers} />
    case 2: 
      return <TrueOrFalse questionNumb={questionNumb} answers={answers} /> 
    case 3: 
      return <TextInput questionNumb={questionNumb} answers={answers} />
    case 4: 
      return <ImageBased questionNumb={questionNumb} answers={answers} />
    default: 
      return <h1>No question Yet</h1>
  }
}

function App() {
  const [currQuestion, setCurrQuestion] = useState(1);
  const answers = {};
  for(let i = 1; i <= 20; i++) {
    answers[i] = '';
  }
  console.log(answers);

  const handleOnPrev = () => {
    if(currQuestion !== 1)
      setCurrQuestion(currQuestion - 1);
  }

  const handleOnNext = () => {
    if(currQuestion !== 20) {
      setCurrQuestion(currQuestion + 1);
    }
  }

  return (
    <div className="App">
      <div className="level-component">
        <div id="level-heading" style={{fontSize: '50px', fontWeight: 'bold', color: '#56a5eb'}}>Quiz App</div>
      </div>
      <div className="question-component"><Question questionNumb={currQuestion} answers={answers} /></div>
      <div className="count-component"><Count setCurrQuestion={setCurrQuestion} /></div>
      <div className="move-btn-container">
        <button className="move-btn" onClick={handleOnPrev}>Prev</button>
        <button className="move-btn" onClick={handleOnNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
