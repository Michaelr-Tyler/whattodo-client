import React, { useContext, useState } from "react";
import { Form, FormGroup, Row, Col, Button } from "react-bootstrap";
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
        <Form onSubmit={handleSubmitButtonPress} className="d-flex justify-content-center mb-4">
              <Form.Label className="mr-2"><h3>New Tag</h3></Form.Label>
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
              <Button>Add Tag</Button>
            </Col>
          </Row>
        </Form>

        )
}