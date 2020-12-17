import React, { useContext, useEffect } from "react";
import { ListGroup, Row, Col, Container, Button } from "react-bootstrap";
import SubmitButton from "../utils/SubmitButton";
import Tag from "./Tag";
import { TagContext } from "./TagsDataProvider";


export default (props) => {
    const { tags, getTags, deleteTag} = useContext(TagContext);

    tags.sort((a, b) => {
        const nameA = a.label.toUpperCase();
        const nameB = b.label.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      useEffect(() => {
        getTags();
      }, []);


      return (
        <Container>
            {tags.map((t) => {
                return (
                    <ListGroup key={t.id}>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                <Col >
                                <h3><Tag tag={t} /></h3>
                                </Col>
                                <Col xs="6">
                                <SubmitButton 
                                label={"Delete"}
                                variant={""} 
                                onClick={ (e) => {
                                    e.preventDefault()
                                    deleteTag(t.id)
                                    .then(getTags)
                                }} />
                                </Col>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    )
            })}
        </Container>
        );
}

