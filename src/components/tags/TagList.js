import React, { useContext, useEffect } from "react";
import { ListGroup, Row, Col, Container } from "react-bootstrap";
import SubmitButton from "../utils/SubmitButton";
import Tag from "./Tag";
import { TagContext } from "./TagsDataProvider";


export const TagList = () => {
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

      const tagList = () => {
        if(tags.length === 0) {
          return (
            <Container fluid>
              <Row>
                <Col className="d-flex justify-content-center">
                  <h1>Add some tags to help organize your tasks even more!</h1>
                </Col>
              </Row>
            </Container>
            )
        } else {
          return (
            <Container className="d-flex justify-content-center">
              <ListGroup style={{width: "50rem"}}>
                {tags.map((t) => {
                    return (
                            <ListGroup.Item key={t.id}>
                                <Row>
                                  <Col>
                                    <Tag tag={t} />
                                  </Col>
                                  <Col className="d-flex justify-content-end">
                                    <SubmitButton 
                                    label={"Delete"}
                                    variant={"danger"} 
                                    onClick={ (e) => {
                                        e.preventDefault()
                                        deleteTag(t.id)
                                        .then(getTags)
                                    }} />
                                  </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                      })}
                      </ListGroup>
            </Container>
            );
        }
      }


      return tagList()
}

