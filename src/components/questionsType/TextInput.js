import React from 'react'

import QuestionList from './data/questions.js';
import '../styles/question.css';

export default function TextInput(props) {
  return (
    <div className="question-container">
      <p className="question">{props.questionNumb}. A question from database?</p>
      <div className="option-container">
        <input className="text-input-field" type="text" placeholder="Type your answere here" />
      </div>
    </div>
  )
}
