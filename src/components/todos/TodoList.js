import React, { useContext, useEffect } from "react";
import { Todo } from "./Todo";
import { ListGroup } from "react-bootstrap";
import { TodoContext } from "./TodoDataProvider";
import { CategoryDropDown } from "./CategoriesDropDown";

export const TodoList = () => {
    const {todos, getTodos} = useContext(TodoContext)

    useEffect(()=>{getTodos()},[])
    return (
        <>
        <CategoryDropDown />
        <ListGroup variant="flush">{todos.map((td)=>{
                return <Todo key={td.id} task={td.task} tags={td.tags} category={td.category.label}/>
            }
        )}</ListGroup>
        </>
        )
}