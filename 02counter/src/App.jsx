import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const plusValue = ()=>{
    setCount(counter+1);
    console.log("clicked"+counter);
  }

  const minus = ()=>{
    setCount(counter-1);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>count: {counter}</h2>
      <button onClick={plusValue}>+</button>
      <button onClick={minus}>-</button>
    </>
  )
}

export default App
