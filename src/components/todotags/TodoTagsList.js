import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export const TodoTagList = ({ todoTags, settingTagId }) => {

  return (
    <>
        {todoTags.map((todoTag) => {
          return (

            <Badge as={Button} pill 
            onClick={(e)=>{ 
              e.preventDefault() 
              settingTagId(todoTag.id)}} 
              variant="primary" 
              className="mx-1" 
              key={todoTag.id}
              > {todoTag.label} 
            </Badge>

          );
        })}
    </>
  );
};
