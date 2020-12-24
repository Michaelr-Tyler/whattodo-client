import React  from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { TodoTagList } from "../todotags/TodoTagsList";
import SubmitButton from "../utils/SubmitButton";


export const Todo = (props) => {
    return (
        <ListGroup.Item>
            <Row className="align-items-center justify-content-end my-1">
                <Col>
                    <h5>{props.task}</h5>
                </Col>
                <Col>
                <TodoTagList todoTags={props.tags}/>
                </Col>
                {props.category ? <Col className="text-muted">
                <p>{props.category}</p>
                </Col> : ""}
            </Row>
        </ListGroup.Item>
            
        )
    
    

}
