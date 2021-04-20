import React from "react";
import './Login.css';
import Login_C from '../../Components/Login_C';
import Navbar from '../../Components/Navbar';

const Login = () => {
return (
    <div>
        <Navbar/>
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <Login_C/>
                </div>
            </div>
            
        </div>
        
    </div>
    
);
};

export default Login;