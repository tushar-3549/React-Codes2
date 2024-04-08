import React, { useCallback, useState } from 'react'
import Message from './Message.js'

const UseCallback = () => {
    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(0);

    // const handleAdd = () => {
    //     setCount(count + 1)      // problem arise where also call message rendering 
    // }
    const handleAdd = useCallback(() => {
        setCount(count+1)
    }, [count])

    console.log("App Rendering");
  return (
    <div>
        {toggle ? "On": "Off"} <br />
        <button onClick={()=> {setToggle(!toggle)}}>Toggle</button>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount((count) => count + 1)}>
            Addition
        </button>
        <Message numberofMessage={count} onHandleAdd = {handleAdd} />
    </div>
  )
}

export default UseCallback

