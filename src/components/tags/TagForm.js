import React, { useContext, useState } from "react";
import { Form, FormGroup, Row } from "react-bootstrap";
import { TagContext } from "../tags/TagsDataProvider";
import SubmitButton from "../utils/SubmitButton";

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
        <Form onSubmit={handleSubmitButtonPress} className="my-4">
            <Row className="flex-column">
                <FormGroup>
                <Form.Control
                    className="w-75 mx-auto"
                    type="text"
                    placeholder="Add text"
                    name="label"
                    value={tag.label}
                    autoComplete={"off"}
                    onChange={handleControlledInputChange}
                />
                </FormGroup>

                <SubmitButton label={"Add Tag"} />
            </Row>
        </Form>

        )
}