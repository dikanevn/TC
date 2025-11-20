import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="container">
      <h1 className="title">Счетчик v30</h1>
      <div className="count">{count}</div>
      <div className="buttonContainer">
        <button 
          className="button decrementButton" 
          onClick={decrement}
        >
          -
        </button>
        <button 
          className="button resetButton" 
          onClick={reset}
        >
          Сброс
        </button>
        <button 
          className="button incrementButton" 
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default App

