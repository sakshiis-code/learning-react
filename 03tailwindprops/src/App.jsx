import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sakshi",
    age: 20
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
    <h1 className='bg-orange-300 text-white p-3 rounded-xl mb-4'>Tailwind test</h1>

    <Card username="Sakshi" btnText="Click Me" /><br />
    <Card username="Sarah" btnText="Visit Me" />
    </>
  )
}

export default App
