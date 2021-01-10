import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import ChartWrapper from "../chart/ChartWrapper";
import TodoAccordian from "../todos/TodoAccordian";
import { TodoContext } from "../todos/TodoDataProvider"
import { UserWelcome } from "../user/UserWelcome";
import { CategoryContext } from "../category/CategoryDataProvider";
import { DashboardModal } from "./DashboardModal";
import ClosingTag from "../tags/ClosingTag";



export const Dashboard = () => {
  const {todos, getTodos, getTodosByTag} = useContext(TodoContext)
  const {categories, getCategories} = useContext(CategoryContext)

  const [tagId, setTagId] = useState("")
  
  useEffect(()=> {
    getCategories()
  }, [])

  useEffect(()=>{
    if (tagId === ""){
      getTodos()
    } else if(tagId !== ""){
      getTodosByTag(tagId)
    }
  },[tagId])

  const renderChart = () => {
    if(todos.length === 0) {
      return (
        <>
          <h5 style={{"textAlign":"center"}} class="text-muted">Log some todos to see where they chart</h5> 
          <ChartWrapper todos={todos} />
        </>
      )
      }
      
      return <ChartWrapper todos={todos} />
    }
    
  return (
    <Container style={{maxWidth:"50rem"}} sm={1}>
      <Row>
        <Col className="mr-5 ml-2 mt-3 d-flex justify-content-end">
          <DashboardModal />
        </Col>
      </Row>
      <Row>
        <Col className="m-3">
          <UserWelcome />
        </Col>
      </Row>
        {!tagId ? "" : 
        <Row>
          <Col className="d-flex justify-content-end mr-2">
            <ClosingTag setTagId={setTagId}/>
          </Col>
        </Row>
        }
        <Row>
        <Col className="">
        <Card style={{minWidth:"375px"}}>
          {renderChart()}
        </Card>
        </Col>
        </Row>
      <Row className="">
        <Col>
          <TodoAccordian categories={categories} todos={todos} setTagId={setTagId}/>
        </Col>
      </Row>
      <Row className="">
        <Col>
          <Card bg="dark">
            <Card.Footer>
              <small className="d-flex justify-content-center text-muted"> Copyright Michael Tyler &copy; 2021</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      </Container>

  )
}