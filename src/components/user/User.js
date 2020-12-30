import React, { useEffect, useContext, useState } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import { UserContext } from "../user/UserDataProvider";
import { Clock } from "../utils/Clock";

export const User = () => {
  const {user, getCurrentUser} = useContext(UserContext)

  useEffect(()=>{getCurrentUser()},[])

  return (
      <Alert variant="primary">
        <Alert.Heading>
          <Row>
            <Col>
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