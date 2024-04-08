
import React, { useRef } from 'react'

const UserForm = () => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;
        console.log({username, password});
        // console.log("submit");
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='username'>Username: </label>
            <input type='text' id='username' ref={userNameRef}/>
        </div>
        <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' ref={passwordRef}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default UserForm
