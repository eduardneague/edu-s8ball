import { useState, useEffect } from 'react'
import Input from '../components/Input'
import './App.css'
import { data } from './data'

function App() {
  const [reading, setReading] = useState("")
  const [question, setQuestion] = useState("")

  const baseURL = 'https://eightballapi.com/'
  const queryString = '?question='
  
  function randomNumber(array) {
    return Math.ceil(Math.random() * array.length)
  }

  function handleKeyDown(event) {
    if(event.key === "Enter") {
      if(event.target.value === "") {
        setReading("You have to ask me a question.")
      }
      else {
        setReading(data[randomNumber(data)])
      }
    }
  }

  return (
   <>
    <div className = "main--container">
        <h1 className = "main--title">
            edu's 8ball
        </h1>
        <h2 className = "secondary-title">ask a <span className = "yes--or--no">yes or no</span> question</h2>
          <Input
            handleKeyDown = {handleKeyDown}
          />
        <h2 className = "secondary-title">then press enter</h2>

        <h2 className = "ball-answer"> {reading} </h2>
    </div>
   </>
  )
}

export default App
