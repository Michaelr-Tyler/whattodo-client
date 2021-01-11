import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const TodoTagList = (props) => {

  props.todoTags.sort((a, b) => {
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

  return (
    <Col className="d-flex flex-wrap">
        {props.todoTags.map((todoTag) => {
          return (
            <div className="d-flex align-items-center">
            <Badge as={Button} pill 
              onClick={(e)=>{ 
                e.preventDefault() 
                props.setTagId(todoTag.id)
              }} 
              variant="primary" 
              className="m-1" 
              key={todoTag.id}
              > {todoTag.label} 
            </Badge>
            </div>

          );
        })}
    </Col>
  );
};
