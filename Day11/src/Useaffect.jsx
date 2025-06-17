import { useState, useEffect } from "react";

// function Att() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 100)},[]);

//   return (<h3>I've rendered {count} times!</h3>);
// }
// export default Att;

function Att() {
    const [count, setCount] = useState(0);

useEffect(() => {setCount(count+1)}
    , [5]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={add}>Increment Count</button>
        </div>
    );
}

export default Att;

