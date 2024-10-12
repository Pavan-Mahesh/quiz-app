import React from 'react'

import './styles/count.css'

export default function Count({questionNumb, setCurrQuestion, showAnswers}) {
  const numbers = [];
  for(let i = 1; i <= 20; i++) {
    numbers.push(i);
  }
  
  return (
    <div className="number-container">
      <div className="numbers-grid">
        {
          numbers.map((number) => {
            return <button className="number" key={number} 
              onClick={() => setCurrQuestion(number)}
            >{number}</button>
          })
        }
      </div>
      <button className="submit-btn" onClick={showAnswers}>Submit</button>
    </div>
  )
}
