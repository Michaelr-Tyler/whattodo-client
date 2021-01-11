import React from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Button } from "react-bootstrap"
import Logo from "../../images/Logo.png"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand as={Link} to="/">
            <img className="navbar__logo" src={Logo} alt={"A red triangel, yellow square, blue circle, and black back slash with What to do? below it as a home button"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav container ">
          <Nav className="mr-auto container-fluid"> 

            <Button variant="outline-info" className="mx-2 my-1" onClick={() => props.history.push("/todo/form")}>Add Task</Button>
            <Button variant="outline-info" className="mx-2 my-1" onClick={() => props.history.push("/todo")}>Todo List</Button>
            <Button variant="outline-info" className="mx-2 my-1" onClick={() => props.history.push("/tags")}>Tag Manager</Button>
            <Button variant="outline-light" className="mx-2 my-1 ml-md-auto" onClick={() => props.history.push("/logout")}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
