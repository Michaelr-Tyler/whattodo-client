import React from "react";
import { Badge, Button } from "react-bootstrap"
import { AiOutlineCloseCircle } from "react-icons/ai";

export default ({ removeTagId }) => {
  return (
      <Badge as={Button}
      onClick={(e)=>{ 
        e.preventDefault() 
        removeTagId()
        }} 
        pill 
        variant="primary" 
        className="m-1"> 
        Remove filter
          <AiOutlineCloseCircle 
          style={{color: "white"}} 
          />
      </Badge> 
  );
};


