import React, { useState } from 'react'

function Counter () {
    const [count,setCounter] = useState(0)
    const changeDownCounter = function (i) {
        if(i > 0) {
            return setCounter(i-1);
        } else {
            return setCounter(0);
        }
    } 
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{count}</h1>
            <button onClick={()=> setCounter((count) => count+1)}>+</button>
            <button onClick={()=> changeDownCounter(count)}>-</button>
            <button onClick={()=> setCounter((count) => count=0)}>reset</button>
        </div>
    )
}

export default Counter
