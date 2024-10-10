import React from 'react'
import MCQ from './MCQ'
import TrueOrFalse from './TrueOrFalse'
import TextInput from './TextInput'
import ImageBased from './ImageBased'

export default function Question(props) {
  switch(Math.ceil(props.questionNumb / 5)) {
    case 1: return <MCQ questionNumb={props.questionNumb} />
    case 2: return <TrueOrFalse questionNumb={props.questionNumb} /> 
    case 3: return <TextInput questionNumb={props.questionNumb} />
    case 4: return <ImageBased questionNumb={props.questionNumb}/>
    default: return <h1>No question Yet</h1>
  }

}
