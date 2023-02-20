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
    return (<>
      <h2 style={{textAlign: "center"}}> Check The Fridge </h2>
      <div className="border rounded m-5">
          {toggle ? (
              <Form className="create-form">
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
                    <Row className="d-flex justify-content-center">
                        <Col>
                            <Button style={{ width: "100%" }} onClick={() => setToggle(false)}>Already have an account?</Button>
                        </Col>
                        <Col>
                            <Button style={{ width: "100%" }} type="submit" onClick={handleCreate}>Create</Button>
                        </Col>
                    </Row>


              </Form>
          ) : (
                  <Form className="login-form">
                      <FormGroup>
                          <Label>Username:</Label>
                          <Input type="text" onChange={(e) => setUsername(e.target.value)} />
                      </FormGroup>
                      <FormGroup>
                          <Label>Password:</Label>
                          <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                      </FormGroup>
                      <Row className="d-flex justify-content-center">
                          <Col>
                              <Button style={{ width: "100%" }} onClick={() => setToggle(true)}>Create Account</Button>
                          </Col>
                          <Col>
                              <Button style={{ width: "100%" }} type="submit" onClick={handleLogin}>Login</Button>
                          </Col>
                       </Row>
                  </Form>
              )}
        </div>
        </>
  );
}
