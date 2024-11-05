import React from 'react'

import '../styles/question.css';
import { quizQuestions } from './data/questions';

export default function TextInput({currQuestion, answers, setAnswers}) {
  const handleTextChange = (event) => {
    const ans = event.target.value;
    setAnswers(a => ({...a, [currQuestion]: ans}))
  }

  return (
    <div className="question-container">
      <p className="question">{currQuestion}. {quizQuestions[currQuestion].question}</p>
      <div className="option-container">
        <input className="text-input-field" type="text" placeholder="Type your answere here" onChange={handleTextChange} value={answers[currQuestion]} />
      </div>
    </div>
  )
}
