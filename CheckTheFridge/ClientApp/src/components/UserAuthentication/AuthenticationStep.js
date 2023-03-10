import React, { useState } from "react";
import App from "../../App";
import LoginPage from "./LoginPage";

/*
 * This file is the intermediate step for having a user login before viewing application
 * currently a null token state is being passed to LoginPage component to be initialized to
 * allow user to view webpage contents */

export default function AuthorizeUser() {
  const [token, setToken] = useState(false);

  if (!token) {
    return <LoginPage userToken={setToken} />;
  }
  return <App />;
}
