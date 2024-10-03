import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(11)
  // let counter = 11;

  const addValue = ()=> {
    counter = counter +1;
    console.log("clicked: ", counter)
    setCounter(counter)
    // setCounter(counter + 3)
    // setCounter(counter + 4)
    // setCounter(counter + 5)
    
  }

  const RemoveValue = () => {
    counter = counter-1;
    console.log("value depreciated: ", counter);
    setCounter(counter)
  }

  return (
    <>
      

      <h1>Hello this is me !</h1>
      <h2>Counter Value: {counter}</h2>
      
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={RemoveValue}>Remove Value </button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
