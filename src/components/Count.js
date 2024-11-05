import React from 'react'

import './styles/count.css'

export default function Count({currQuestion, setCurrQuestion, answers, visits, setVisits}) {
  const numbers = [];
  for(let i = 1; i <= 20; i++) {
    numbers.push(i);
  }

  const defaultStyle = {
    color: 'black',
    backgroundColor: 'rgb(238, 249, 255)',
    border: '1px solid rgb(189, 218, 244)'
  }

  const isCurrStyle = {
    color: 'white',
    backgroundColor: 'rgb(28, 139, 255)',
    border: '1px solid rgb(28, 139, 255)'
  }

  const answeredStyle = {
    color: 'rgb(35, 73, 46)',
    backgroundColor: 'rgb(209, 233, 216)',
    border: '1px solid rgb(209, 233, 216)'
  }

  const notAnsweredStyle = {
    color: 'rgb(156, 19, 0)',
    backgroundColor: 'rgb(250, 218, 216)',
    border: '1px solid rgb(250, 218, 216)'
  }

  const handleBtnClick = (event) => {
    setVisits(v => ({...v, [currQuestion]: true}));

    const numb = parseInt(event.target.innerText);
    setCurrQuestion(numb);
  }
  
  return (
    <div className="number-container">
      <div className="numbers-grid">
        {
          numbers.map((number) => {
            let style = defaultStyle;
            if(number === currQuestion){ 
              style = isCurrStyle;
            } else if(visits[number]) {
              if(answers[number] !== "")
                style = answeredStyle;
              else
                style = notAnsweredStyle;
            }

            return (
              <button className="number" key={number} 
                style={style}
                onClick={handleBtnClick}
              >{number}</button>
            )
          })
        }
      </div>
      <button className="submit-btn" onClick={() => console.log(answers)}>Submit</button>
    </div>
  )
}
