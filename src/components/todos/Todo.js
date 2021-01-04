import React from "react";
import { Col } from "react-bootstrap";
import { TodoTagList } from "../todotags/TodoTagsList";





export const Todo = (props) => {
    return (
        
            <>
                <Col>
                    <h5>{props.task}</h5>
                </Col>
                <Col className="d-flex justify-content-end">
                    <TodoTagList onClick={()=> console.log(props.tags)} todoTags={props.tags}/>
                </Col>
                
                {props.category ? <Col className="d-flex justify-content-end text-muted">
                <p>{props.category}</p>
                </Col> : ""}                
            </>
         
        )
    
    

}
