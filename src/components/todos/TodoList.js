import React, { useContext, useEffect, useState } from "react";
import { Todo } from "./Todo";
import { ListGroup, Row, Col } from "react-bootstrap";
import { TodoContext } from "./TodoDataProvider";
import { CategorySelect } from "./CategorySelect";
import SubmitButton from "../utils/SubmitButton";
import { GrEdit } from "react-icons/gr";
import { GoChecklist } from "react-icons/go";


export const TodoList = (props) => {
    const {todos, getTodos, getTodosByCategory, deleteTodo} = useContext(TodoContext)
    const [categoryId, setCategoryId] = useState("0")
    
    
    useEffect(()=>{
        //check if the value is eqaul to zero 
        // and if not set the categoryId and run get todos by cattegory
        if (categoryId !== "0") {
            getTodosByCategory(categoryId)
        } else {
            getTodos()
        }
    },[categoryId])

    
    return (
        <>
        <CategorySelect onChange={id => setCategoryId(id)} />
        <ListGroup variant="flush">{todos.map((td)=>{
                return (
                <ListGroup.Item>
                    <Row xs={1} sm={4}>
                     <Todo key={td.id} task={td.task} tags={td.tags} category={td.category.label} />
                     <Col className="d-flex justify-content-end">
                     <SubmitButton  label={<GrEdit />} onClick={(e)=> {
                         e.preventDefault()
                         props.history.push(`/todo/create/${td.id}`)}} />
                     <SubmitButton label={<GoChecklist />} onClick={(e)=> {
                         e.preventDefault()
                         deleteTodo(td.id)
                         .then(()=> {
                            if (categoryId !== "0") {
                                getTodosByCategory(categoryId)
                            } else {
                                getTodos()
                            }
                         })}}/>
                     </Col>
                    </Row>
                </ListGroup.Item>
                 )
            }
        )}</ListGroup>
        </>
        )
}