import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const TodoTagList = ({ todoTags, settingTagId }) => {

  return (
    <Col className="d-flex">
        {todoTags.map((todoTag) => {
          return (
            <div className="d-flex align-items-center">
            <Badge as={Button} pill 
              onClick={(e)=>{ 
                e.preventDefault() 
                settingTagId(todoTag.id)
              }} 
              variant="primary" 
              className="ml-1" 
              key={todoTag.id}
              > {todoTag.label} 
            </Badge>
            </div>

          );
        })}
    </Col>
  );
};
