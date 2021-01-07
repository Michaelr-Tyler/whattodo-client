import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ChartWrapper from "../chart/ChartWrapper";
import TodoAccordian from "../todos/TodoAccordian";
import { TodoContext } from "../todos/TodoDataProvider"
import { UserWelcome } from "../user/UserWelcome";
import { CategoryContext } from "../category/CategoryDataProvider";
import { DashboardContent } from "./DashboardContent";
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
    <>
      <Row>
        <Col className="mr-2 ml-2 mt-3">
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
      <Row className="mt-4">
      <Col className="ml-2 mb-2">
        <DashboardContent />
      </Col>
        <Col className="mr-2 ml-2">
        <Card style={{minWidth:"375px"}}>
          {renderChart()}
        </Card>
          <TodoAccordian categories={categories} todos={todos} setTagId={setTagId}/>
        </Col>
        <Col>
          <Card className="mb-4 mt-4" style={{minWidth:"375px"}}>
            {renderChart()}
          </Card>
          <TodoAccordian />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Card bg="dark">
            <Card.Footer>
              <small className="d-flex justify-content-center text-muted"> Copyright Michael Tyler &copy; 2021</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>

  )
}