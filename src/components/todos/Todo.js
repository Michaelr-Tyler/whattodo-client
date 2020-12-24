import React, { useContext }  from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { TodoTagList } from "../todotags/TodoTagsList";
import SubmitButton from "../utils/SubmitButton";
import { TodoContext } from "./TodoDataProvider";




export const Todo = (props) => {
    const {deleteTodo, getTodos} = useContext(TodoContext)
    return (
        
            <>
                <Col>
                    <h5>{props.task}</h5>
                </Col>
                <Col>
                    <TodoTagList todoTags={props.tags}/>
                </Col>
                
                {props.category ? <Col className="text-muted">
                <p>{props.category}</p>
                </Col> : ""}                
            </>
         
        )
    
    

}
