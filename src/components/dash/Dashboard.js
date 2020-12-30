import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Spinner, Card, Alert } from "react-bootstrap";
import ChartWrapper from "../chart/ChartWrapper";
import TodoAccordian from "../todos/TodoAccordian";
import { TodoContext } from "../todos/TodoDataProvider"
import MatrixImage from "../../images/EisenhowerMatrix.png"
import { User } from "../user/User";



export const Dashboard = (props) => {
  const {todos, getTodos} = useContext(TodoContext)
  
  useEffect(()=>{
    getTodos()
  },[])

  const renderChart = () => {
    if(todos.length === 0) {
      return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
    }
    return <ChartWrapper todos={todos} />
  }
  
  return (
    <>
    <Row>
      <Col>
        <User />
      </Col>
    </Row>
      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Img variant="top" src={MatrixImage} />
            <Card.Header as="h5">What is the Eisenhower matrix?</Card.Header>
            <Card.Body>
              <Card.Title>Eisenhower Matrix:</Card.Title>
              <Card.Text>
                 A method, developed by Dwight D, Eisenhower, that can help you decide and prioritize tasks by urgency and importance, 
                 sifting out less urgent and important tasks which you should either delegate or not do at all. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
          {renderChart()}
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoAccordian />
        </Col>
      </Row>
    </>

  )
}