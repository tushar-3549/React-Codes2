import React, { useState } from 'react'

function Toggle() {
    const [toggle, setToggle] = useState(true);

    return (
        <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
            {toggle && (
                <p>Consetetur et sed vero lorem et stet et, accusam consetetur sit est eirmod et sed eos.
                    Voluptua dolores sed vero sea diam vero voluptua eos no, lorem takimata diam dolor.</p>
            )}
            <div style={{ textAlign: "center" }}>
                <button onClick={() => {
                    // setToggle(true);
                    setToggle(!toggle);
                }}>
                    {toggle ? "Hide" : "Show"}
                </button>
                {/* <button onClick={() => {
                    setToggle(false);
                }}>Hide</button> */}
            </div>
        </div>
    )
}

export default Toggle
