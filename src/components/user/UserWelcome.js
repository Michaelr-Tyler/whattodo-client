import React, { useEffect, useContext, useState } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import { UserContext } from "./UserDataProvider";
import { Clock } from "../utils/Clock";

export const UserWelcome = () => {
  const {user, getCurrentUser} = useContext(UserContext)

  useEffect(()=>{getCurrentUser()},[])

  return (
      <Alert variant="secondary">
        <Alert.Heading>
          <Row>
            <Col className="d-flex align-content-center">
            Welcome {user.full_name}!
            </Col>
            <Col>
            <div  className="d-flex justify-content-end">
              <Clock />
            </div>
            </Col>
          </Row>
        </Alert.Heading>
    </Alert>
  )
}