import React, { useContext, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
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
          <Row className="d-flex justify-content-center">
            <Form onSubmit={handleSubmitButtonPress} className="d-flex mb-4 mt-4">
            <Col  xs={3} className="d-flex align-items-center">
              <h5 style={{color:"#fff"}}>New Tag</h5>
            </Col>
            <Col xs={8} className="d-flex align-items-center">
                    <Form.Control
                        type="text"
                        placeholder="Add tag"
                        name="label"
                        value={tag.label}
                        autoComplete={"off"}
                        onChange={handleControlledInputChange}
                    />
            </Col>
            <Col xs={4} className="d-flex align-items-center">
              <Button>Add Tag</Button>
            </Col>
            </Form>
          </Row>

        )
}