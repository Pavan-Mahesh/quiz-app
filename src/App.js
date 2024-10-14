import './App.css'
import { useState } from 'react';
import React from 'react'

import MCQ from './components/questionsType/MCQ';
import TrueOrFalse from './components/questionsType/TrueOrFalse';
import TextInput from './components/questionsType/TextInput';
import ImageBased from './components/questionsType/ImageBased';
import Count from "./components/Count";

const Question = ({questionNumb, answers, setAnswers}) => {
  switch(Math.ceil(questionNumb / 5)) {
    case 1: 
      return <MCQ questionNumb={questionNumb} answers={answers} setAnswers={setAnswers} />
    case 2: 
      return <TrueOrFalse questionNumb={questionNumb} answers={answers} setAnswers={setAnswers} /> 
    case 3: 
      return <TextInput questionNumb={questionNumb} answers={answers} setAnswers={setAnswers} />
    case 4: 
      return <ImageBased questionNumb={questionNumb} answers={answers} setAnswers={setAnswers} />
    default: 
      return <h1>No question Yet</h1>
  }
}

function App() {
  const [currQuestion, setCurrQuestion] = useState(1);

  const initialAnswers = () => {
    const list = {}
    for(let i = 1; i <= 20; i++)
      list[i] = "";

    return list;
  }
  const [answers, setAnswers] = useState(initialAnswers);
  // console.log(answers);

  const initialVisits = () => {
    const list = {}
    for(let i = 1; i <= 20; i++) {
      if(i === 1)
        list[i] = true;
      else
        list[i] = false;
    }

    return list;
  }
  const [visits, setVisits] = useState(initialVisits);

  const handleOnPrev = () => {
    if(currQuestion !== 1) {
      setCurrQuestion(c => c - 1);
      setVisits(v => ({...v, [currQuestion]: true}))
    }
  }

  const handleOnNext = () => {
    if(currQuestion !== 20) {
      setCurrQuestion(c => c + 1);
      setVisits(v => ({...v, [currQuestion]: true}))
    }
  }

  return (
    <div className="App">
      <div className="quiz-title">
        <div id="level-heading" style={{fontSize: '50px', fontWeight: 'bold', color: 'rgb(86, 165, 235)'}}>Quiz App</div>
      </div>
      <div className="question-component"><Question questionNumb={currQuestion} answers={answers} setAnswers={setAnswers} /></div>
      <div className="count-component"><Count questionNumb={currQuestion} setCurrQuestion={setCurrQuestion} answers={answers} visits={visits} setVisits={setVisits} /></div>
      <div className="move-btn-container">
        <button className="move-btn" onClick={handleOnPrev}>Prev</button>
        <button className="move-btn" onClick={handleOnNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
