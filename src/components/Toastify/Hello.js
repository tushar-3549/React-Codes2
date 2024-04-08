import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hello = () => {
    const notify = () => toast("Wow so easy!");
  return (
    <div>
      <h1>Hello World</h1>
      <br />
      <button onClick={notify}>Click Here</button>

      <ToastContainer/>
    </div>
  )
}

export default Hello
