import React from 'react'

import '../styles/question.css';
import { quizQuestions } from './data/questions';

export default function TextInput({questionNumb, answers, setAnswers}) {
  const handleTextChange = (event) => {
    const ans = event.target.value;
    setAnswers(a => ({...a, [questionNumb]: ans}))
  }

  return (
    <div className="question-container">
      <p className="question">{questionNumb}. {quizQuestions[questionNumb].question}</p>
      <div className="option-container">
        <input className="text-input-field" type="text" placeholder="Type your answere here" onChange={handleTextChange} value={answers[questionNumb]} />
      </div>
    </div>
  )
}
