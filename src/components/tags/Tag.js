import React from "react";
import { Badge } from "react-bootstrap"

export default ({ tag }) => {
  return (
    <h3>
      <Badge pill variant="primary" className="m-1">{tag.label}</Badge> 
    </h3>
  );
};
