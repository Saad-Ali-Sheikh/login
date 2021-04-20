import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const Login_C = () => {
return (

      <form>
        <p className="h4 text-center mb-4">Sign in</p>
        <div className="grey-text w-100">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center mb-5">
          <MDBBtn color="indigo">Login</MDBBtn>
        </div>
        <a href="#"> Create A New Account </a>
      </form>
);
};

export default Login_C;