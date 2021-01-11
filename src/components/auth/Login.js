import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col, Container, Form, Row, Card } from "react-bootstrap";
import { BASE_URL } from "../utils/request";
import { LandingPageContent } from "./LandingPage";
import "./Login.css"


export const Login = () => {
  const username = useRef();
  const password = useRef();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.valid) {
          localStorage.setItem("user_token", res.token)
          localStorage.setItem("user_id", res.user_id)
          history.push("/");
        } else {
          window.alert("username or password was not valid.");
        }

      });
  };

  return (
    <div className="background--wrapper__login">
        <Container sm={1} md={2}>
          <Row>
            <Col className="mt-5">
              <LandingPageContent />
            </Col>
            <Col className="mb-5 mt-5">
              <Card style={{background:"#DDE2E3", borderRadius:"50px", padding:"10px"}}>
              <Form className="m-3" onSubmit={handleLogin}>
                <Form.Group>
                  <Form.Label style={{color:"#3C493F"}}><h1>What To Do?</h1></Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{color:"#3C493F"}}>Username</Form.Label>
                    <Form.Control type="username" ref={username} id="username" placeholder="Username" required autoFocus />
                </Form.Group>
                <Form.Group >
                    <Form.Label style={{color:"#3C493F"}}>Password</Form.Label>
                    <Form.Control type="password" ref={password} id="password" placeholder="Password" required />
                </Form.Group>
              <Row>
                <Col className="d-flex justify-content-around">
                  <Button style={{width:"100px"}} variant="info" type="submit">
                    Sign In
                  </Button>
                  <Link className="d-flex align-items-center" to="/register">Sign up for free!</Link>
                </Col>
              </Row>
              </Form>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  );
};
