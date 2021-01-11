import React, { useContext, useEffect } from "react";
import { ListGroup, Row, Col, Container, Button, Card, Badge } from "react-bootstrap";
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
                  <Card className="p-4" style={{borderRadius:"50px 30px"}}>
                    <h1>Add some <Badge pill variant="primary">tags</Badge> to help organize your tasks even more!</h1>
                    <h5 className="d-flex justify-content-center">You can click these on the homepage and todo list to filter by specific tags</h5>
                  </Card>
                </Col>
              </Row>
            </Container>
            )
        } else {
          return (
            <Container style={{maxWidth:"750px"}}>
              <ListGroup>
                {tags.map((t) => {
                    return (
                            <ListGroup.Item style={{"borderRadius":"50px 30px"}} className="m-2" key={t.id}>
                              <Row className="p-3">
                                <Tag tag={t} />
                                    <Button 
                                    className="mr-3"
                                    variant={"danger"} 
                                    onClick={(e) => {
                                      e.preventDefault()
                                      deleteTag(t.id)
                                      .then(getTags)
                                    }}>Delete</Button>
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

