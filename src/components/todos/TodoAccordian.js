import React, { useContext, useEffect } from "react";
import { Fragment } from "react";
import { Accordion, Card, Button, ListGroup, Row } from "react-bootstrap";
import { CategoryContext } from "../category/CategoryDataProvider";
import { TodoTagList } from "../todotags/TodoTagsList";
import { Todo } from "./Todo";
import { TodoContext } from "./TodoDataProvider";

const TodoAccordian = () => {
    const {todos, getTodos} = useContext(TodoContext)
    const {categories, getCategories} = useContext(CategoryContext)

    useEffect(()=>{
        getTodos()
        getCategories()
        
    },[])

    

    return (
        <Accordion className="bg-dark mb-2 mt-4">
            <Card>
                {categories.map((c)=>{
                    return(<Fragment key={c.id}>
                        <Card.Header className="bg-secondary">
                            <Accordion.Toggle as={Button} variant="secondary" eventKey={c.id}>
                            <h3>{c.label}</h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={c.id}>
                            <ListGroup variant="flush">{todos.map((td)=>{
                                if (td.category.id === c.id) {
                                    return (
                                        <ListGroup.Item className="bg-light">
                                            <Row>
                                                <Todo key={td.id} task={td.task}/>
                                                <TodoTagList onClick={() => console.log("clicked here too")} todoTags={td.tags}/>
                                            </Row>
                                        </ListGroup.Item>
                                    )
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