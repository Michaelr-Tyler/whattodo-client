import React, { useContext, useEffect } from "react";
import { ListGroup, Row, Col, Container, Button } from "react-bootstrap";
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

      const tagList = (props) => {
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
                            <ListGroup.Item style={{borderRadius:"50px 10px 50px 15px"}} className="m-1" key={t.id}>
                                <Row className="d-flex">
                                    <Tag tag={t} />
                                  <Col className="d-flex justify-content-end">
                                    <Button 
                                    className="mr-3"
                                    style={{borderRadiu:"50px"}}
                                    variant={"danger"} 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        deleteTag(t.id)
                                        .then(getTags)
                                    }}>Delete</Button>
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

