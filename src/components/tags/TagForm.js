import React, { useContext, useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { TagContext } from "../tags/TagsDataProvider";


export const TagForm = () => {
    const { tags, createTag, getTags } = useContext(TagContext)
    const [tag, setTag] = useState({label: ""})
    const tagNames = tags.map((t) => t.label.toLowerCase());


    const handleSubmitButtonPress = (e) => {
        e.preventDefault();
        if (
          !tagNames.includes(tag.label.toLowerCase().trim()) &&
          tag.label.trim().length 
        ) {
          createTag(tag)
          .then(getTags)
            tag.label = "";
        } else {
          alert("Please enter a valid tag name");
        }
      }

      const handleControlledInputChange = (e) => {
        const newTag = Object.assign({}, tag)
        newTag[e.target.name] = e.target.value
        setTag(newTag)
      }

    return (
            <Container fluid className="d-flex justify-content-center m-4">
              <Row>
                <Col>
                  <Form.Control
                      type="input"
                      placeholder="New Tag"
                      name="label"
                      value={tag.label}
                      autoComplete={"off"}
                      onChange={handleControlledInputChange}
                  />
                </Col>
                <Col>
                  <Button onClick={handleSubmitButtonPress}>Add Tag</Button>
                </Col>
              </Row>
            </Container>
        )
}