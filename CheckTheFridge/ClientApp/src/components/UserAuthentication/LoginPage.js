import React,
{ useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ userToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleSubmit () {
        console.log(username);
        console.log(password);
        userToken(1);
    }

    return (
      <form class = "login-form"  >
          <h2> Check The Fridge </h2>
          <div class = "input">
              <label>
                  <p>Username</p>
                  <input type="text" onChange={e => setUsername(e.target.value)} />
              </label>
          </div>
          <div class = "input">
              <label>
                  <p>Password</p>
                  <input type="password" onChange={e => setPassword(e.target.value)} />
              </label>

          </div>
          <div class = "submit">
              <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
       </form>

        )

}
