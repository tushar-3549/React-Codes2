import React, { useEffect, useState } from 'react'

const ExampleTwo = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Lister Added");
        // To need cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Lister Removed");
        }
    }, [])

    useEffect (()=> {
        document.title = `Size: ${width} x ${height}`
    }, [width, height]);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p>Width: {width} px</p> <br />
            <p>Height: {height} px</p>
        </div>
    )
}

export default ExampleTwo

