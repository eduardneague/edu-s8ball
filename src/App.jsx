import { useState, useEffect } from 'react'
import Input from '../components/Input'
import './App.css'

function App() {
  
  const [reading, setReading] = useState("")
  const [question, setQuestion] = useState("")

  const baseURL = 'https://eightballapi.com/api'
  const queryString = '?question='
  
  function handleKeyDown(event) {
    if(event.key === "Enter") {
      if(event.target.value === "") {
        setReading("You have to ask me a question.")
      }
      else {
        setQuestion(event.target.value)
          fetch(`${baseURL}${queryString}${question}&lucky=false`)
          .then((response) => response.json())
          .then((data) => setReading(data.reading))
      }
    }
  }

  return (
   <>
    <div className = "main--container">
        <h1 className = "main--title">
            edu's 8ball
        </h1>
        <h2 className = "secondary-title">ask anything </h2>
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
