import React from "react";
import { Badge, Button } from "react-bootstrap"

export default (props) => {
  return (
    <h5>
      <Badge as={Button}
      onClick={(e)=>{ 
        e.preventDefault() 
        props.setTagId("")
        }} 
        pill 
        variant="secondary" 
        className="m-1"> 
        Remove filter
      </Badge> 
    </h5>
  );
};


