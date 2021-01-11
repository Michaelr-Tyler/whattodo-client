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
                  <Card style={{borderRadius:"50px 10px 50px 15px", padding:"10px"}}>
                    <h1>Add some <Badge pill variant="primary">tags</Badge> to help organize your tasks even more!</h1>
                    <h5 className="d-flex justify-content-center">You can click these on the homepage and todo list to filter by specific tags</h5>
                  </Card>
                </Col>
              </Row>
            </Container>
            )
        } else {
          return (
            <Container sm ={1} className="d-flex justify-content-center">
              <ListGroup style={{width: "50rem"}}>
                {tags.map((t) => {
                    return (
                            <ListGroup.Item style={{borderRadius:"50px 10px 50px 15px"}} className="m-2" key={t.id}>
                                <Row className="d-flex m-2">
                                  <Col className="d-flex align-items-center">
                                    <Tag tag={t} />
                                  </Col>
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

