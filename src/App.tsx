import React from 'react';
import {useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState("dummyUser")
  return (
  <div>
    <h1>User: {name}</h1>
    <div className="container">
      <div className="textcon"></div>
      <p className="chatbox">
        <strong>name:</strong>
        <span>chat message</span>
      </p>

    </div>
  </div>


);
}

export default App;
