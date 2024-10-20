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
    for(let i = 1; i <= 20; i++)
        list[i] = false;

    return list;
  }
  const [visits, setVisits] = useState(initialVisits);

  const handleOnPrev = () => {
    if(currQuestion !== 1) {
      setVisits(v => ({...v, [currQuestion]: true}))
      setCurrQuestion(c => c - 1);
    }
  }

  const handleOnNext = () => {
    if(currQuestion !== 20) {
      setVisits(v => ({...v, [currQuestion]: true}))
      setCurrQuestion(c => c + 1);
    }
  }

  return (
    <div className="App">
      <div className="quiz-title">Quiz App</div>
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
