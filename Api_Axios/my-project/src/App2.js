import axios from 'axios'
import React,{useState, useEffect} from "react"

function App() {
const [count, setCount] =useState(0)

useEffect(()=>{
  console.log("run")
},[count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>add ..</button>
    </div>
  )
}

export default App