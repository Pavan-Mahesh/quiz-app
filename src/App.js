import './App.css'
import { useState , useEffect } from 'react';
import React from 'react'

import MCQ from './components/questionsType/MCQ';
import TrueOrFalse from './components/questionsType/TrueOrFalse';
import TextInput from './components/questionsType/TextInput';
import ImageBased from './components/questionsType/ImageBased';
import Count from "./components/Count";

const Question = ({currQuestion, answers, setAnswers}) => {
  switch(Math.ceil(currQuestion / 5)) {
    case 1: 
      return <MCQ currQuestion={currQuestion} answers={answers} setAnswers={setAnswers} />
    case 2: 
      return <TrueOrFalse currQuestion={currQuestion} answers={answers} setAnswers={setAnswers} /> 
    case 3: 
      return <TextInput currQuestion={currQuestion} answers={answers} setAnswers={setAnswers} />
    case 4: 
      return <ImageBased currQuestion={currQuestion} answers={answers} setAnswers={setAnswers} />
    default: 
      return <h1>No question Yet</h1>
  }
}

function App() {
  const [currQuestion, setCurrQuestion] = useState(JSON.parse(sessionStorage.getItem('currQuestion')) || 1);

  useEffect(() => {
    sessionStorage.setItem('currQuestion', currQuestion);
  }, [currQuestion]);

  const initialAnswers = () => {
    const list = {}
    for(let i = 1; i <= 20; i++)
      list[i] = "";

    return list;
  }
  const [answers, setAnswers] = useState(JSON.parse(sessionStorage.getItem('answers')) || initialAnswers);
  // console.log(answers);

  useEffect(() => {
    sessionStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);

  const initialVisits = () => {
    const list = {}
    for(let i = 1; i <= 20; i++) {
        list[i] = false;
    }

    return list;
  }
  const [visits, setVisits] = useState(JSON.parse(sessionStorage.getItem('visits')) || initialVisits);

  useEffect(() => {
    sessionStorage.setItem('visits', JSON.stringify(visits));
  }, [visits]);

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
      <div className="quiz-title">
        <div id="level-heading" style={{fontSize: '50px', fontWeight: 'bold', color: 'rgb(86, 165, 235)'}}>Quiz App</div>
      </div>
      <div className="question-component"><Question currQuestion={currQuestion} answers={answers} setAnswers={setAnswers} /></div>
      <div className="count-component"><Count currQuestion={currQuestion} setCurrQuestion={setCurrQuestion} answers={answers} visits={visits} setVisits={setVisits} /></div>
      <div className="move-btn-container">
        <button className="move-btn" onClick={handleOnPrev}>Prev</button>
        <button className="move-btn" onClick={handleOnNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
