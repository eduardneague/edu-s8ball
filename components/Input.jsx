import { useState, useEffect } from 'react'

function Input(props) {
  return (
   <>
        <input 
            id = "input" 
            name = "input" 
            type = "text" 
            className = "input--field"
            placeholder = "here"
            onKeyDown = {props.handleKeyDown}
        />
   </>
  )
}

export default Input
