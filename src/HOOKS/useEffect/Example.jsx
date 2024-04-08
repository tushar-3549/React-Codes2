import React, { useEffect, useState } from 'react'

const Example = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    function addCount () {
        setCount(c => c+1);
    }
    function subCount () {
        setCount(c => c-1);
    }
    function changeColor () {
        setColor(c => c === "green"? "red": "green");
    }

    // useEffect(()=> {}, [value]) -> Runs on mount + value changes 
    
    // NOTE: 
    // useEffect(()=> {})  -> Run on every render 
    // useEffect(()=> {}, [])  -> Run only on first render 
    // useEffect(()=> {}, [value]) -> Run only when certain values changed 

    useEffect(()=> {
        document.title = `Count: ${count} ${color}`
    }, [count, color])
  return (
    <div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Sub</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Example