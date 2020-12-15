import React from "react"
import { Navbar } from "react-bootstrap"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"

export const WhatToDo = () => { 
   return (<>
    
        <Route render={(props) => {
            if (localStorage.getItem("user_id")) {
                return <>
                    <NavBar {...props}/>
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />
       <Route path="/login" render={() => {
            if (localStorage.getItem("user_id")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register" render={(props) => {
            if (localStorage.getItem("user_id")) {
                return <Redirect to="/" />
            } else {
                return <Register {...props} />
            }
        }} />
    </>
   )
    
}