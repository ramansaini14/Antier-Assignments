import React, { useState } from "react";
import './App.css';
import isValid from "./emailValidator";

function App() {
  const [email, setEmail] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid(email);
  };

  return (
    <div className="App">
      <h2>Enter your email</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email : </label>
        <input type="text" id="Email" value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">OK!</button>
      </form>
    </div>
  );
}

export default App;