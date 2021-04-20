import React, { Component } from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact';
import './index.css';
//import logo from './logo.png';
import Login from './Pages/Login/Login';
//import Login from './Components/Login';

function Clipboard_CopyTo(value) {
  var tempInput = document.createElement('input');
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

const handleClick = () => {
  Clipboard_CopyTo('T9TTVSQB');
  var div = document.getElementById('code-success');
    div.style.display = 'block';
  setTimeout(function () {
    document.getElementById('code-success').style.display = 'none';
  }, 900);
};

function App() {
    return (
      <Login/>
      
    );
}

export default App;
