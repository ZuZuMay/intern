import React from 'react'

const Header = ({count,name}) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      
       <p> Count Number is{count}</p>
    </div>
  )
}

export default Header
