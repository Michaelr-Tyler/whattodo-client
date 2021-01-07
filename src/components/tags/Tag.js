import React from "react";
import { Badge, Col } from "react-bootstrap"

export default ({ tag }) => {
  return (
    <Col className="d-flex align-items-center ml-2">
      <Badge style={{fontSize:"20px"}} pill variant="primary">{tag.label}</Badge> 
    </Col>
  );
};
