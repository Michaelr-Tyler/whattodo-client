import React from "react";
import { Col } from "react-bootstrap";




export const Todo = (props) => {


    return (
            <Col className="d-flex justify-content-center">
                <div class="d-flex align-items-center">{props.task}</div>             
            </Col>
        )
    
    

}
