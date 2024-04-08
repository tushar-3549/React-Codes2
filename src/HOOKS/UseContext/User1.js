import React, { useState } from 'react'
import User2 from './User2'
import { UserContext } from "./UserContext";

const User1 = () => {
    const [user, setUser] = useState({ name: "Tushar Ahmed", id: 3549 });

    return (
        <UserContext.Provider value={{ user }}>
            <User2 />
        </UserContext.Provider>
    )
}

export default User1
