import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>count: 0</h2>
      <button>+</button>
      <button>-</button>
    </>
  )
}

export default App
