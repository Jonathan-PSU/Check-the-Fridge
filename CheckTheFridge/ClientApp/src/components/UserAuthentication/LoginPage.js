import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ userToken }) {
  //Variables
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [toggle, setToggle] = useState(false);

  // Function to send username and password to be verified.Expects user token.
  function handleLogin() {
    console.log(username);
    console.log(password);
    userToken(1);

    // Logic to be added for giving access or setting invalid message
  }

  /*Function that sends new user info to Backend to be added to database
  Re-routes to login page */
  function handleCreate() {
    console.log(first);
    console.log(last);
    console.log(username);
    console.log(password);
    setToggle(false);
  }

  /* Shows default login page/ sign up page */
  return (
    <div className="Auth-Page">
      {toggle ? (
        <form className="create-form">
          <h2> Check The Fridge </h2>
          <div className="input">
            <label>
              <p>First Name:</p>
              <input type="text" onChange={(e) => setFirst(e.target.value)} />
            </label>
          </div>
          <div className="input">
            <label>
              <p>Last Name:</p>
              <input type="text" onChange={(e) => setLast(e.target.value)} />
            </label>
          </div>
          <div className="input">
            <label>
              <p>Username:</p>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="input">
            <label>
              <p>Password:</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="submit">
            <button onClick={handleCreate} type="submit">
              Create
            </button>
          </div>
        </form>
      ) : (
        <form className="login-form">
          <h2> Check The Fridge </h2>
          <div className="input">
            <label>
              <p>Username</p>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="input">
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="submit">
            <button onClick={() => setToggle(true)}> Create Account</button>
            <button type="submit" onClick={handleLogin}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
