import React  from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

export const Todo = (props) => {
    const tags = props.tags
    return (
        <ListGroup.Item>
            <Row className="align-items-center justify-content-end my-1">
                <Col>
                    <h5>{props.task}</h5>
                </Col>
                <Col>
                <div>todotags list will eventually go here</div>
                </Col>
            </Row>
        </ListGroup.Item>
            
        )
    
    

}
