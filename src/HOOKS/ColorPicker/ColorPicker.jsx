import React, { useState } from 'react'
import './ColorPicker.css'
const ColorPicker = () => {
    const [color, setColor] = useState('#FFFFFF');

    const changeHandler = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className="container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{background: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a color </label>
                <input type="color" value={color} onChange={changeHandler} />
        </div>
    )
}

export default ColorPicker