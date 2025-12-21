import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    setCounter(counter => {
      if (counter >= 20) return counter
      return counter + 1
    })
  }
  
  const removeValue = () => {
    setCounter(counter => {
      if (counter <= 0) return counter
      return counter - 1
    })
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value: {counter}</button><br /><br />
      <button
      onClick={removeValue}
      >Remove value: {counter}</button>
    </>
  )
}

export default App
