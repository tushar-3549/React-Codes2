import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Signup() {
    const [submittedValues, setSubmittedValues] = useState("");

    const validationSchema = yup.object({
        name: yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
        email: yup.string().email("Invalid email address").required("Email is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            setSubmittedValues(values);
            resetForm();
        }
    });

    const renderForm = <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
            <br />
            {formik.touched.name && formik.errors.name && <span style={{ color: "red" }}>{formik.errors.name}</span>}
        </div>

        <br />

        <div>
            <label htmlFor='email'>E-mail: </label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
            <br />
            {formik.touched.email && formik.errors.email && <span style={{ color: "red" }}>{formik.errors.email}</span>}
        </div>

        <br />

        <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
            <br />
            {formik.touched.password && formik.errors.password && <span style={{ color: "red" }}>{formik.errors.password}</span>}
        </div>

        <br />

        <button type='submit'>Submit</button>
    </form>


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>SignUp Form</h1>

            {renderForm}

            <br />

            {submittedValues && (
                <div style={{ border: "2px solid red", width: "50%", margin: "0 auto"}}>
                    <h2>Submitted Values</h2>
                    <p><b>Name: </b> {submittedValues.name}</p>
                    <p><b>Email: </b> {submittedValues.email}</p>
                    <p><b>Password: </b> {submittedValues.password}</p>
                </div>
            )}
        </div>
    );
}

export default Signup;
