import React, {useState} from 'react'
function Signup() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleNameChange = (e) => {
        setname(e.target.value);
    }
    const handleEmailChange = (e) => {
        setemail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setpassword(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        const newUser = {
            name,
            email,
            password
        };
        console.log(newUser);

    }
  return (
    <div style={{textAlign: 'center'}}>
      <h1>SignUp Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name' name='name' onChange={handleNameChange} value={name}/>
        </div>
        
        <br />

        <div>
            <label htmlFor='email'>E-mail: </label>
            <input type='email' id='email' name='email' onChange={handleEmailChange} value={email}/>
        </div>

        <br />

        <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password' onChange={handlePasswordChange} value={password}/>
        </div>

        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup
