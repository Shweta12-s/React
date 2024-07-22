import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // let counter = 15

let [counter, setCounter]= useState(15)

  const addValue = ()=>{
    
    counter = counter + 1
   setCounter(counter)
  //  console.log("clicked", counter);
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1> 1st project yayyyyy</h1>
      <h2> Counter value: {counter}</h2>
      <button
      onClick={addValue}> Increase Value </button>
      <br />
      <button
      onClick = {removeValue}> Decrease Value {counter}</button>
      <h3> footer: {counter}</h3>
    </>
  )

}
export default App
