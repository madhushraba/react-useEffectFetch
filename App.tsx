import * as React from 'react';
import './style.css';
import {useState, useEffect} from "react"

export default function App() {
const[data,setdata]=useState([])
const[num,setnum]=useState(0)

useEffect(()=>{
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((res)=>res.json())
  .then((res)=>setdata(res))
},[num])

console.log(data)
  return (
    <div>
      <h1>Hello Madhu ❤️ !</h1>
      <img style={{height:"100px"}} src={data.message}/>
      <h1>{num}</h1>
      <button onClick={()=>{setnum(num+1)}}> click</button>
    </div>
  );
}
 