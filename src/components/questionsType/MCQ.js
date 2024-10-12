import React from 'react'

import '../styles/question.css';
import { quizQuestions } from './data/questions';

export default function MCQ({questionNumb, answers}) {
  const notSelected = {
    color: 'black',
    backgroundColor: 'rgb(238, 249, 255)',
    border: '1px solid rgb(189, 218, 244)'
  }

  const isSelected = {
    color: 'rgb(35, 73, 46)',
    backgroundColor: 'rgb(209, 233, 216)',
    border: '1px solid rgb(209, 233, 216)'
  }

  return (
    <div className="question-container">
      <p className="question">0{questionNumb}. {quizQuestions[questionNumb].question}</p>
      <div className="option-container">
        <button className="option-btn" id="option-a">{quizQuestions[questionNumb].options.a}</button>
        <button className="option-btn" id="option-b">{quizQuestions[questionNumb].options.b}</button>
        <button className="option-btn" id="option-c">{quizQuestions[questionNumb].options.c}</button>
        <button className="option-btn" id="option-d">{quizQuestions[questionNumb].options.d}</button>
      </div>
    </div>
  )
}
