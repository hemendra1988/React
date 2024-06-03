import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    //console.log('Clicked', counter);
    if (counter < 20) {
      counter += 1
      setCounter(counter)  
    }
  }

  const delValue = () => {
    // console.log('Clicked', counter);
    if (counter > 0) {
      counter -= 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Mini Project via React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} >Add Value</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={delValue}>Substract Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
