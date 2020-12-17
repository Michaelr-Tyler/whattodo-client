import React, { useContext, useEffect } from "react";
import { Fragment } from "react";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";
import { CategoryContext } from "../category/CategoryDataProvider";
import { Todo } from "./Todo";
import { TodoContext } from "./TodoDataProvider";

const TodoAccordian = (props) => {
    const {todos, getTodos} = useContext(TodoContext)
    const {categories, getCategories} = useContext(CategoryContext)

    useEffect(()=>{
        getTodos()
        getCategories()
        
    },[])

    

    return (
        <Accordion>
            <Card>
                {categories.map((c)=>{
                    return(<Fragment key={c.id}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={c.id}>
                            <h3>{c.label}</h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={c.id}>
                            <ListGroup variant="flush">{todos.map((td)=>{
                                if (td.category.id === c.id) {
                                    return <Todo key={td.id} task={td.task} />
                                }
                            })}</ListGroup>
                            </Accordion.Collapse>
                  </Fragment>
                    )
                })}
            </Card>
        </Accordion>
    )
}

export default TodoAccordian;