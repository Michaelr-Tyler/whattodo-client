import React, { useContext }  from "react";
import { Col } from "react-bootstrap";
import { TodoTagList } from "../todotags/TodoTagsList";
import { TodoContext } from "./TodoDataProvider";




export const Todo = (props) => {
    return (
        
            <>
                <Col>
                    <h5>{props.task}</h5>
                </Col>
                <Col className="d-flex justify-content-end">
                    <TodoTagList todoTags={props.tags}/>
                </Col>
                
                {props.category ? <Col className="d-flex justify-content-end text-muted">
                <p>{props.category}</p>
                </Col> : ""}                
            </>
         
        )
    
    

}
