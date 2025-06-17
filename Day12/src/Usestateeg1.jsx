import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
     //document.title=`Count: ${count}`;
    console.log("Running")
  },[count]); 

  const incrementCount = () => {
      setCount(count + 1);
  }
  const decreaseCount=()=>{
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
       <button onClick={decreaseCount}>decrement</button>
    </div>
  );
}

export default ExampleComponent;