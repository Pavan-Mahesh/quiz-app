import React from 'react'

import '../styles/question.css';
import { quizQuestions } from './data/questions';

export default function TrueOrFalse({currQuestion, answers, setAnswers}) {
  const options = ["True", "False"];
  let currAnswer = answers[currQuestion];

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

  const handleBtnClick = (event) => {
    if(currAnswer === event.target.innerText) {
      currAnswer = "";
      setAnswers(a => ({...a, [currQuestion]: currAnswer}))
    } else {
      currAnswer = event.target.innerText;
      setAnswers(a => ({...a, [currQuestion]: currAnswer}))
    }
  }

  return (
    <div className="question-container">
      <p className="question">{currQuestion > 9 ? '' : '0'}{currQuestion}. {quizQuestions[currQuestion].question}</p>
      <div className="option-container">
        {
          options.map(option => {
            return (
              <button className="option-btn" key={`option-${option}`}
                onClick={handleBtnClick}
                style={currAnswer === option ? isSelected : notSelected}
              >{option}</button>
            )
          })
        }
      </div>
    </div>
  )
}
