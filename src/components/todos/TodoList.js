import React, { useContext, useEffect, useState } from "react";
import { Todo } from "./Todo";
import { ListGroup, Row, Col, Container, Button } from "react-bootstrap";
import { TodoContext } from "./TodoDataProvider";
import { CategorySelect } from "./CategorySelect";
import { GrEdit } from "react-icons/gr";
import { GoChecklist } from "react-icons/go";
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
        <Container className="mt-4">
            <CategorySelect onChange={id => setCategoryId(id)} />
            {!tagId ? "" : <ClosingTag setTagId={setTagId}/>}
            <ListGroup>{todos.map((td)=>{
                return (
                <ListGroup.Item style={{"borderRadius":"50px 10px 50px 15px"}} className="m-1">
                    <Row>
                        <Todo key={td.id} task={td.task} />
                        <TodoTagList setTagId={setTagId} todoTags={td.tags}/>
                        <Col className="d-flex justify-content-center">
                            <div className="text-muted d-flex align-items-center">{td.category.label}</div>
                        </Col>
                        <Col className="d-flex justify-content-end">
                        <Button
                        className="mr-2"
                        onClick={(e)=> {
                            e.preventDefault()
                            props.history.push(`/todo/form/${td.id}`)
                            }}>
                                <GrEdit style={{color:"white"}}/>
                        </Button> 
                        <Button 
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
                                <GoChecklist style={{color:"black"}}/>
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