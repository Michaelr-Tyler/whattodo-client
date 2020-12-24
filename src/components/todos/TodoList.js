import React, { useContext, useEffect, useState } from "react";
import { Todo } from "./Todo";
import { ListGroup } from "react-bootstrap";
import { TodoContext } from "./TodoDataProvider";
import { CategorySelect } from "./CategorySelect";


export const TodoList = (props) => {
    const {todos, getTodos, getTodosByCategory} = useContext(TodoContext)
    const [categoryId, setCategoryId] = useState("0")
    
    
    useEffect(()=>{
        //check if the value is eqaul to zero 
        // and if not set the categoryId and run get todos by cattegory
        if (categoryId !== "0") {
            getTodosByCategory(categoryId)
        } else {
            getTodos()
        }
    },[categoryId])

    
    return (
        <>
        <CategorySelect onChange={id => setCategoryId(id)} />
        <ListGroup variant="flush">{todos.map((td)=>{
                return <Todo key={td.id} task={td.task} tags={td.tags} category={td.category.label}/>
            }
        )}</ListGroup>
        </>
        )
}