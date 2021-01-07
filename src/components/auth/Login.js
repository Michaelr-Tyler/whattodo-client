import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import "./Login.css";


export const Login = () => {
  const username = useRef();
  const password = useRef();
  const invalidDialog = useRef();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch("http://localhost:8000/login", {
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
          invalidDialog.current.showModal();
        }

      });
  };

  return (
      <main className="container--login">
        <dialog className="dialog dialog--auth" ref={invalidDialog}>
          <Modal.Body>
            <div>username or password was not valid.</div>
          </Modal.Body>
          <Button
            className="button--close"
            onClick={(e) => invalidDialog.current.close()}
          >
            Close
          </Button>
        </dialog>
        <Container>
          <Form className="d-flex-column mt-5" onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label style={{color:"#e6e3f1"}}><h1>What To Do?</h1></Form.Label>
              <br />
              <Form.Label style={{color:"#e6e3f1"}}><h4>Please sign in</h4></Form.Label>
            </Form.Group>
            <Form.Group style={{width:"20rem"}}>
                <Form.Label style={{color:"#e6e3f1"}}>Username</Form.Label>
                <Form.Control type="username" ref={username} id="username" defaultValue="michael" placeholder="username" required autoFocus />
            </Form.Group>
            <Form.Group style={{width:"20rem"}}>
                <Form.Label style={{color:"#e6e3f1"}}>Password</Form.Label>
                <Form.Control type="password" ref={password} id="password" defaultValue="me" placeholder="Password" required />
            </Form.Group>
              <Button variant="info" type="submit">
                Sign In
              </Button>
          </Form>
          <Row style={{width:"20rem"}}>
            <Col className="d-flex justify-content-center">
              <Link to="/register">Not a member yet?</Link>
            </Col>
          </Row>
          <Row style={{color:"#c0c8ce"}} className="d-flex fixed-bottom text-center mb-2">
            <Col>
              <footer>image belongs to @kellysikkema</footer>
            </Col>
          </Row>
        </Container>
      </main>
  );
};
