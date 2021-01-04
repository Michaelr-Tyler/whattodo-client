import React from "react";
import Badge from "react-bootstrap/Badge";

export const TodoTagList = ({ todoTags, onClick }) => {

  return (
    <>
      <div>
        {todoTags.map((todoTag) => {
          return (
            <Badge onClick={onClick} pill variant="primary" className="mx-1" key={todoTag.id}>
              {todoTag.label}
            </Badge>
          );
        })}
      </div>
    </>
  );
};
