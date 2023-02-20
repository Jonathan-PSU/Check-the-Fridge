import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
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
              <Form className="create-form">
                  <h2> Check The Fridge </h2>
                  <FormGroup>
                      <Label>First Name:</Label>
                      <Input type="text" onChange={(e) => setFirst(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                      <Label>Last Name:</Label>
                      <Input type="text" onChange={(e) => setLast(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                      <Label>Username:</Label>
                      <Input type="text" onChange={(e) => setUsername(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                      <Label>Password:</Label>
                      <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                  </FormGroup>
                  <Button type="submit" onClick={handleCreate}>Create</Button>
              </Form>
          ) : (
                  <Form className="login-form">
                      <h2> Check The Fridge </h2>
                      <FormGroup>
                          <Label>Username:</Label>
                          <Input type="text" onChange={(e) => setUsername(e.target.value)} />
                      </FormGroup>
                      <FormGroup>
                          <Label>Password:</Label>
                          <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                      </FormGroup>
                      <Button onClick={() => setToggle(true)}>Create Account</Button>
                      <Button type="submit" onClick={handleLogin}>Submit</Button>
                  </Form>
              )}
    </div>
  );
}
