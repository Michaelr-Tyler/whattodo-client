import React, { useContext, useEffect, useState } from "react";
import { Todo } from "./Todo";
import { ListGroup, Row, Col, Container, Button } from "react-bootstrap";
import { TodoContext } from "./TodoDataProvider";
import { CategorySelect } from "./CategorySelect";
import { FiEdit2 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { TodoTagList } from "../todotags/TodoTagsList";
import ClosingTag from "../tags/ClosingTag";

export const TodoList = (props) => {
    const {todos, getTodos, getTodosByCategory, deleteTodo, getTodosByTag} = useContext(TodoContext)
    const [categoryId, setCategoryId] = useState("0")
    const [tagId, setTagId] = useState("")

    useEffect(()=>{
        //check if the value is eqaul to zero 
        // and if not set the categoryId and run get todos by cattegory
        if (categoryId !== "0" ) {
            getTodosByCategory(categoryId)
        } else if (categoryId === "0" && tagId !== "") {
            getTodosByTag(tagId)
        } else {
            getTodos()
        }
    },[categoryId, tagId])

    
    return (
        <Container className="mt-4" style={{maxWidth:"1000px"}}>
            <CategorySelect onChange={id => setCategoryId(id)} />
            {!tagId ? "" : <ClosingTag setTagId={setTagId}/>}
            <ListGroup>{todos.map((td)=>{
                return (
                    <ListGroup.Item style={{"borderRadius":"50px 30px"}} className="m-2">
                    <Row xs={1} sm={1} md={4} className=" p-1 d-flex justify-content-center">
                        <Col  className="d-flex justify-content-center">
                            <Todo key={td.id} task={td.task} />
                        </Col>
                        <Col className="d-flex flex-wrap">
                            <TodoTagList setTagId={setTagId} todoTags={td.tags}/>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <div className="text-muted d-flex align-items-center">{td.category.label}</div>
                        </Col>
                        <Col style={{maxHeight:"50px"}} className="d-flex justify-content-center">
                            <Button
                            className="m-1"
                            onClick={(e)=> {
                            e.preventDefault()
                            props.history.push(`/todo/form/${td.id}`)
                            }}>
                                <FiEdit2 style={{color:"white"}}/>
                            </Button> 
                            <Button 
                            className="m-1"
                            variant="success"
                            onClick={(e)=> {
                            e.preventDefault()
                            deleteTodo(td.id)
                            .then(()=> {
                            if (categoryId !== "0" ) {
                                getTodosByCategory(categoryId)
                            } else if (categoryId === "0" && tagId !== "") {
                                getTodosByTag(tagId)
                            } else {
                                getTodos()
                            }
                            })}}>
                                <FaCheck style={{color:"white"}}/>
                            </Button>
                        </Col>
                    </Row>
                    </ListGroup.Item>
                        )
            }
        )}  
            </ListGroup>
        </Container>
        )
}
