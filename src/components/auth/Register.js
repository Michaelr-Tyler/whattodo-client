import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Col, Form, Button, Row } from "react-bootstrap"

export const Register = props => {
  const [ formValues, setFormValues ] = useState({})

  /**
   * Handle a controlled form input change. Update formValues in state to reflect new form state.
   * @param {Event} e Event object for form control onChange
   */
  const handleFormChange = e => {
    const updatedFormValues = Object.assign({}, formValues)
    updatedFormValues[e.target.name] = e.target.value
    setFormValues(updatedFormValues)
  }

  /**
   * Handle the register form submit. Verify that the passwords match, then post the new user to the API.
   * @param {Event} e Event object for form submission.
   */
  const handleFormSubmit = e => {
    e.preventDefault()

    // grab all of the values off the formValues state object for each form input
    const { first_name, last_name, email, username, password, verifyPassword } = formValues

    if(password === verifyPassword) {
      // Create an object for the new user... all fields are required except for profile_image_url and bio in the form,
      // so just set those to empty string manually if still undefined at this point
      const newUser = {
        first_name,
        last_name,
        email,
        username,
        password
      }

      return fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
      })
        .then(res => res.json())
        .then(res => {
          // After successful POST to /register, response will contain auth token and User id, set those in localStorage
          // and redirect us on to the app with those values set
          localStorage.setItem("user_token", res.token)
          localStorage.setItem("user_id", res.user_id)
          props.history.push("/")
        })
    }
    else {
      alert("Your passwords do not match")
    }
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1 className="text-center">What to do?</h1>
      <Form onSubmit={handleFormSubmit}>
        <Row className="justify-content-around" style={{ minHeight: '450px' }}>

          <Col sm="12" md="5" className="d-flex flex-column align-items-center justify-content-between">

            <Form.Control type="text" 
              required
              className="my-2"
              name="first_name"
              placeholder="First Name" 
              onChange={handleFormChange} 
              value={formValues.first_name || ''} />

            <Form.Control type="text"
              required
              className="my-2"
              name="last_name"
              placeholder="Last Name"
              onChange={handleFormChange}
              value={formValues.last_name || ''}  />

            <Form.Control type="email"
              required
              className="my-2"
              name="email"
              placeholder="Email"
              onChange={handleFormChange}
              value={formValues.email || ''} />
          </Col>

          <Col sm="12" md="5" className="d-flex flex-column align-items-center justify-content-between">
            <Form.Control type="text"
              required
              className="my-2"
              name="username"
              placeholder="Username"
              onChange={handleFormChange}
              value={formValues.username || ''}  />

            <Form.Control type="password"
              required
              className="my-2"
              name="password"
              placeholder="Password"
              onChange={handleFormChange}
              value={formValues.password || ''}  />

            <Form.Control type="password"
              required
              className="my-2"
              name="verifyPassword"
              placeholder="Verify Password"
              onChange={handleFormChange}
              value={formValues.verifyPassword || ''}  />
          </Col>
        </Row>

        <Button type="submit" variant="success" className="d-block mx-auto my-4 w-25">Register</Button>
      </Form>

      <Row className="justify-content-center">
        <Link to="/login">Already Have an account? Click here to log in!</Link>
      </Row>
    </main>
  )
}
