import React, { useContext }  from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { TodoTagList } from "../todotags/TodoTagsList";
import SubmitButton from "../utils/SubmitButton";
import { TodoContext } from "./TodoDataProvider";




export const Todo = (props) => {
    const {deleteTodo, getTodos} = useContext(TodoContext)
    return (
        
            <Row lg={6} xs={1}>
                
                    <h5>{props.task}</h5>
                
                <TodoTagList todoTags={props.tags}/>
                
                {props.category ? <Col className="text-muted">
                <p>{props.category}</p>
                </Col> : ""}                
            </Row>
         
        )
    
    

}
