import axios from "axios";
import { useState, useEffect } from "react";

export default function App(){
const [data, setData]=useState([])
console.log(data)
useEffect(()=>{
  axios.get("https://thronesapi.com/api/v2/Characters")
  .then((res)=>{
    setData(res.data)
  })
  .catch((err)=>{
    console.log(err, "err")
  })
})

  return(
    <div>
      {data.map((x)=>(
        <>
        <img src={x.imageUrl} />
        <h1 className="font-bold">{x.title}</h1>
        </>

))}
    </div>
  )
}
