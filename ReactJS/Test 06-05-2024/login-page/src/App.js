import './App.css';
import React from "react";
import isValid from "./emailValidator";
import FormLayout from "./loginForm";

function App() {
  const [email, setEmail] = React.useState('');
  const [isAuth, setIsAuth] = React.useState(false);

  const handleBtnClick = (e) => {
    e.preventDefault();
    const isValidEmail = isValid(email);
    if (isValidEmail) {
      setIsAuth(true);
    } else {
      alert("You are not allowed to access this page");
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="App">
      {!isAuth && (
        <div>
          <h2>Enter your email</h2>
          <form>
            <label htmlFor="Email">Email : </label>
            <input type="text" id="Email" onChange={handleInputChange}></input>&nbsp;
            <button onClick={handleBtnClick} class="btn">OK!</button>
          </form>
        </div>
      )}
      {isAuth && (
        <FormLayout />
      )}
    </div>
  );
}

export default App;