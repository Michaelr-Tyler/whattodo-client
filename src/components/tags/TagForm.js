import React, { useContext, useState } from "react";
import { Form, FormGroup, Row, Col, Button, Container } from "react-bootstrap";
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
      <Container fluid>
        <Form onSubmit={handleSubmitButtonPress}>
          <Row>
              <h3>New Tag</h3>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                    <Form.Control
                        type="text"
                        placeholder="Add tag"
                        name="label"
                        value={tag.label}
                        autoComplete={"off"}
                        onChange={handleControlledInputChange}
                    />
              </FormGroup>
            </Col>
            <Col>
              <Button>New tag</Button>
            </Col>
          </Row>
        </Form>
      </Container>

        )
}