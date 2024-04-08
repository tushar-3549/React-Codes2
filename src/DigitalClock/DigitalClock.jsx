import React, { useEffect, useState } from 'react'
import './DigitalClock.css'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        // setInterval(callback, 1000)
        const intervalID = setInterval(()=> {
            setTime(new Date());
        }, 1000);
        return ()=> {
            clearInterval(intervalID);
        }
    })

    const formatTime = () => {
        let hours = time.getHours();
        let minites = time.getMinutes();
        let seconds = time.getSeconds();
        const AmOrPm = hours >= 12 ? "PM": "AM";
        hours = hours % 12 || 12;
        
        return `${SolZero(hours)}:${SolZero(minites)}:${SolZero(seconds)} ${AmOrPm}`;
    }

    const SolZero = (n) => {
        return (n < 10 ? "0": "") + n;
    }

  return (
    <div className="clock-container">
        <div className="clock">
            {/* <span>00:00:00</span> */}
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}

export default DigitalClock