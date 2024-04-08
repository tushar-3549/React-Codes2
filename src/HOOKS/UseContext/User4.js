import React, { useContext } from 'react'
import { UserContext } from './UserContext'
const User4 = () => {
    const user = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
        </div>
    )
}

export default User4
