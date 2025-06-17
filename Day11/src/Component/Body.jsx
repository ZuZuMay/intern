import React from 'react'

const Body = ({Decrease,Increase}) => {
  return (
    <div>
     <button onClick={Decrease}>Decrease</button>
     <button onClick={Increase}>Increase</button>
    </div>
  )
}

export default Body