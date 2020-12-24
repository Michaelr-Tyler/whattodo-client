import React, { useContext, useEffect } from "react";
import { TagContext } from "../tags/TagsDataProvider"
import Button from "react-bootstrap/esm/Button";

export const TodoTagForm = ({selectedTodoTagIds, onToggleTodoTag}) => {
  //This component renders each tag as button, styled as either primary or secondary,
  //depending on whether the tag has been selected. The parent component gets to decide
  //which tags have been selected, and what to do when the button is pressed.
  const { tags, getTags } = useContext(TagContext);

  useEffect(() => {
    getTags();
  }, []);

  return (
    <>
      {tags.map((tag) => {
        const tagSelected = selectedTodoTagIds.some((tagId) => tagId === tag.id);
        return (
          <Button
            className="m-2"
            size="sm"
            variant={tagSelected ? "primary" : "secondary"}
            key={tag.id}
            onClick={(evt) => onToggleTodoTag(tag.id)}
          >
            {tag.label}
          </Button>
        );
      })}
    </>
  );
};
