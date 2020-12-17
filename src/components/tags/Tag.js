import React from "react";
import { Badge } from "react-bootstrap"

export default ({ tag }) => {
  return (
    <Badge pill variant="primary" className="m-1">
      {tag.label}
    </Badge> 
  );
};
