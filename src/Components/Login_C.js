import React from "react";
import { Formik } from "formik";
import * as emailvalidator from 'email-validator';
import * as Yup from 'yup';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const Login_C = () => (

  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
            <p className="h4 text-center mb-4">Sign in</p>
            <div className="grey-text w-100">
                    <MDBInput 
                    name="email"
                    label="Type your email" 
                    icon="envelope" 
                    group type="email" 
                    validate error="wrong"
                    success="right"  
                    value={values.email}  
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )}
                    <MDBInput 
                    name="password"
                    label="Type your password" 
                    icon="lock" 
                    group type="password" 
                    validate  value={values.password} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )}
                    
            </div>
            <div className="text-center mb-5">
            <button type="submit" className="btn btn-primary btn-block mb-4" disabled={isSubmitting}>
            Login
          </button>
            </div>
            <a href="#"> Create A New Account </a>
          </form>
      );
    }}
  </Formik>
  
);

export default Login_C;