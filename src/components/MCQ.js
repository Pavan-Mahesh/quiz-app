import React from 'react'

import './styles/question.css';

export default function MCQ(props) {
  // extracting question from database
  const mcq = {
    question: "A choose the correct answer question from the database",
    options: {
      a: "option A",
      b: "option B",
      c: "option C",
      d: "option D"
    }
  }

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
      <p className="question">0{props.questionNumb}. {mcq.question}</p>
      <div className="option-container">
        <button className="option-btn" id="option-a" onClick={handleBtnClick}>{mcq.options.a}</button>
        <button className="option-btn" id="option-b" onClick={handleBtnClick}>{mcq.options.b}</button>
        <button className="option-btn" id="option-c" onClick={handleBtnClick}>{mcq.options.c}</button>
        <button className="option-btn" id="option-d" onClick={handleBtnClick}>{mcq.options.d}</button>
      </div>
    </div>
  )
}
