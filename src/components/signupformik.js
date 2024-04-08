import React, { useState } from 'react'
import { useFormik } from 'formik'

function Signup() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });
        }
    })

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>SignUp Form</h1>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                </div>

                <br />

                <div>
                    <label htmlFor='email'>E-mail: </label>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                </div>

                <br />

                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                </div>

                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup
