import React, { useEffect, useRef, useState } from 'react'
import './StopWatch.css'

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=> {
      if(isRunning) {
        intervalIdRef.current = setInterval(()=> {
          setElapsedTime(Date.now() - startTimeRef.current);
        }, 10)
      }

      return () => {
        clearInterval(intervalIdRef.current);
      }

    }, [isRunning]);
    
    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        // console.log(startTimeRef.current);
    }
    const stop = () => {
      setIsRunning(false);
    }
    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formatTime = () => {
      let hours = Math.floor(elapsedTime / (1000* 60 * 60));
      let minites = Math.floor(elapsedTime / (1000* 60) % 60 );
      let seconds = Math.floor(elapsedTime / (1000) % 60);
      let miliseconds = Math.floor((elapsedTime % 1000) / 10);

      return `${zeroHandling(hours)}:${zeroHandling(minites)}:${zeroHandling(seconds)}:${zeroHandling(miliseconds)}`

      // return `00:00:00`
    }

    const zeroHandling = (n) => {
      return (n < 10 ? "0": "") + n;
    }

  return (
    <div className='stopwatch'>
        <div className="display">
            {formatTime()}
        </div>
        <div className="controls">
          <button onClick={start} className="start-button">Start</button>
          <button onClick={stop} className="stop-button">Stop</button>
          <button onClick={reset} className="reset-button">Reset</button>
        </div>
    </div>
  )
}

export default StopWatch