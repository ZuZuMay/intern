import { useState } from "react";
import { Link ,Outlet, useSearchParams} from "react-router-dom";
import {Book1} from './pages/Book1.jsx'
import {Book2} from './pages/Book2.jsx'

export const BorderLayout=()=>{
    
    const [searchParams,setSearchParams]=useSearchParams({n:3})
    const [number,setNumber]=useState("")
    const num=searchParams.get("n")
    console.log("Query param n:",num)
    return(
    <>
    <nav>
    <Link to="/Book1">Book1</Link>
     <Link to="/Book2">Book2</Link>
     <Link to={`/Books/${number}`}>Book{number}</Link>
      </nav>
     <input type="number" value={number} onChange={e=>setNumber(e.target.value)} placeholder="Enter book number"/>
    <button onClick={() => setSearchParams({ n: number })}>Update Param</button>
    <Outlet context={{hello:"World"}}/>
     </>
     )
}