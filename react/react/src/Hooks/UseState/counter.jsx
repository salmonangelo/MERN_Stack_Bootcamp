import React from 'react';
import { useState } from 'react'
import "./counter.css"

function Counter() {
    const [count, setCount] = useState(100)


    function increment() {
        return setCount(count + 1)
    }


    return (
        <>
            <h2>Counter  : {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default Counter