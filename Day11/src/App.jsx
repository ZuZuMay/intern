import React from 'react'
import { useState } from 'react'
import Header from './Component/Header.jsx'
import Body from './Component/Body.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(10)
  const Decrease=()=>setCount(count-1)
  const Increase=()=>setCount(count+1)
 const [name,setName]=useState("BO")
  return (
    
    <div>
        <Header name ={name} count={count}/>
        <Body Decrease={Decrease} Increase={Increase}/>
    </div>
  )
}

export default App
