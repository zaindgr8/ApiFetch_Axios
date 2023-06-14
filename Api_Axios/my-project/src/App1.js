import React, { useEffect, useState } from 'react'
import axios from "axios" 
function App() {
  const [data,setData] = useState([])
  console.log(data)
  
    useEffect(()=>{
      axios.get("https://thronesapi.com/api/v2/Characters")
      .then((res)=>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log("err", err)
      })
    },[])



  return (
    <div>
      {data.map((x)=>(
        <div>
            <img src={x.imageUrl} alt={x.title} />
            
            <h2>{x.family}</h2>
            
            </div>
        ))} 
      
    </div>
  )
}

export default App