import React from 'react'

import '../styles/question.css';
import { quizQuestions } from './data/questions';

export default function MCQ({questionNumb, answers, updateAnswers}) {
  const options = quizQuestions[questionNumb].options;
  let currAnswer = answers[questionNumb];

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
      updateAnswers(questionNumb, currAnswer); 
    } else {
      currAnswer = event.target.innerText;
      updateAnswers(questionNumb, currAnswer);
    }
  }

  return (
    <div className="question-container">
      <p className="question">0{questionNumb}. {quizQuestions[questionNumb].question}</p>
      <div className="option-container">
        {
          Object.keys(options).map(option => {
            return (
              <button className="option-btn" key={`option-${option}`}
                onClick={handleBtnClick}
                style={currAnswer === options[option] ? isSelected : notSelected}
              >{options[option]}</button>
            )
          })
        }
      </div>
    </div>
  )
}
