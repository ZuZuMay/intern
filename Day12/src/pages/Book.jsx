import React from 'react'
import { useParams,useOutletContext } from 'react-router-dom'
export const Book = () => {
  const {id}=useParams()
  const obj=useOutletContext()
  return (
<h1>Book{id}{obj?.name}</h1>  )
}
