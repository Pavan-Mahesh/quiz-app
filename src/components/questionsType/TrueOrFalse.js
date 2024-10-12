import React from 'react'

import QuestionList from './data/questions.js';
import '../styles/question.css';

export default function TrueOrFalse(props) {
  let ans = "";
  const handleBtnClick = (event) => {
    if(event.target.innerText === ans) {
      event.target.style.backgroundColor = 'rgb(238, 249, 255)';
      event.target.style.color = 'black';
      event.target.style.border = '1px solid rgb(189, 218, 244)';
      ans = "";
    } else {
      const optBtn = document.querySelectorAll('.option-btn');
      optBtn.forEach(btn => {
        btn.style.color = 'black';
        btn.style.backgroundColor = 'rgb(238, 249, 255)';
        btn.style.border = '1px solid rgb(189, 218, 244)';
      });

      event.target.style.color = 'rgb(35, 73, 46)';
      event.target.style.backgroundColor = 'rgb(209, 233, 216)';
      event.target.style.border = '1px solid rgb(209, 233, 216)';
      ans = event.target.innerText;
    }
  }

  return (
    <div className="question-container">
      <p className="question">{props.questionNumb > 9 ? '' : '0'}{props.questionNumb}. A question from database?</p>
      <div className="option-container">
        <button className="option-btn" id="option-a" onClick={handleBtnClick}>True</button>
        <button className="option-btn" id="option-b" onClick={handleBtnClick}>False</button>
      </div>
    </div>
  )
}