import React from 'react'

import './styles/question.css';

export default function TextInput(props) {
  // extracting question from database
  const tin = {
    question: "A choose the correct answer question from the database",
  }

  return (
    <div className="question-container">
      <p className="question">{props.questionNumb}. {tin.question}</p>
      <div className="option-container">
        <input className="text-input-field" type="text" placeholder="Type your answere here" />
      </div>
    </div>
  )
}
