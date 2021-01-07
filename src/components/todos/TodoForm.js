//component to handle todo's added and edited
import React,{useRef, useState, useContext, useEffect} from "react";
import { Form, FormGroup, Row, Col, Container, Button } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { TodoTagForm } from "../todotags/TodoTagForm";
import { TodoContext } from "./TodoDataProvider";


export const TodoForm = (props) => {
    const {createTodo, updateTodo, getSingleTodo, getTodos} = useContext(TodoContext)
    const [importantRating, setImportantRating] = useState(5)
    const [urgentRating, setUrgentRating] = useState(5)

    //set the initial todo tag id array to an empty one, 
    //when sending a Todo object to the server it will be expecting an array of either tag Ids or just an empty array.
    //Instead of trying to set up todo tags on the front end,
    //we can use the back end and some loggic to create the many to many relationships on the back side
    const [selectedTodoTagIds, setSelectedTodoTagIds] = useState([])

    const isEditMode = props.match.params.hasOwnProperty("todoId")

    useEffect(()=>{
        if(isEditMode){
            getSingleTodo(props.match.params.todoId)
            .then(populateFormValues)
        } 
    },[])
    const taskRef = useRef("")


    const populateFormValues = (todo) => {
        taskRef.current.value = todo.task
        setImportantRating(todo.important)
        setUrgentRating(todo.urgent)

        const initiallySelectedtodoTagIds = todo.tags.map(tag => tag.id)
        setSelectedTodoTagIds(initiallySelectedtodoTagIds)
      }

    const onToggleTodoTag = (changeTodoId) => {
        let selectedTodoTagIdsList=[]
        //check if the tag is already in the list of selected tags
        if (selectedTodoTagIds.some((tagId) => tagId === changeTodoId)) {
            //remove the id of the tag from the list of selected tags
            selectedTodoTagIdsList = selectedTodoTagIds.filter(
                (tagId) => tagId !== changeTodoId
            );
        } else {
            //Add the tag to the list of selected tags
            selectedTodoTagIds.push(changeTodoId);
            selectedTodoTagIdsList = selectedTodoTagIds.slice();
        }
        //Set the component stat, which will re-render the component
        setSelectedTodoTagIds(selectedTodoTagIdsList)
    }



    const constructNewTodo = () => {
        if (taskRef.current.value === "") {
            window.alert("Please fill in a task")
        } else {
            // if validation success - create a new object from the form inputs and then either save or update it
            const newTodo = {
                task: taskRef.current.value,
                urgent: parseInt(urgentRating),
                important: parseInt(importantRating),
                tagIds: selectedTodoTagIds
            }
            if(isEditMode) {
                updateTodo(props.match.params.todoId, newTodo)
                .then(getTodos)
                .then(props.history.push(`/todo`))
            } else {
                createTodo(newTodo)
                .then(getTodos)
                
            }
        }
    }

    return (
            
        <Container className="mt-5" fluid>
            <Row className="justify-content-center">
            <Form style={{width:'50rem'}}>
                <Col className="d-flex justify-content-center">
                <h1  style={{color:"#2A2B26", fontSize:"50px", fontWeight:"bold", background:"#DDE2E3", borderRadius: "25px", width:"25rem"}} className="d-flex justify-content-center">
                    {isEditMode ? "Edit Todo" : "Add a new todo"}
                </h1>
                </Col>
                <FormGroup>
                    <Col className="justify-content-center">
                    <Form.Control style={{background:"#DDE2E3", fontWeight:"bold"}} type="text" placeholder="Enter a task" ref={taskRef} />
                    </Col>
                </FormGroup>  
                <FormGroup>
                    <Row>
                    <Col  className="text-center">
                    <Form.Label style={{color:"#2A2B26", background:"#DDE2E3", borderRadius: "25px", padding:"5px", fontWeight:"bold"}}>
                    Importance
                    </Form.Label>
                        <div style={{color:"#2A2B26", background:"#DDE2E3", borderRadius: "25px", padding:"2px", fontWeight:"bold"}}>
                            Think about scoring this higher if you must be the one to complete this
                        </div>
                        <RangeSlider
                            className="mt-3"
                            value={importantRating}
                            onChange={e => setImportantRating(e.target.value)}
                            min = {1}
                            max = {10}
                            tooltip={'off'}
                        />
                    </Col>
                    <Col className="text-center">
                    <Form.Label  style={{color:"#2A2B26", background:"#DDE2E3", borderRadius: "25px", padding:"5px", fontWeight:"bold"}}>
                    Urgency
                    </Form.Label>
                        <div style={{color:"#2A2B26", background:"#DDE2E3", borderRadius: "25px", fontWeight:"bold"}}>
                        Think about scoring this higher if you need to complete this by today or tomorrow
                        </div>
                        <RangeSlider
                            className="mt-3"
                            value={urgentRating}
                            onChange={e => {
                                setUrgentRating(e.target.value)}}
                            min = {1}
                            max = {10}
                            tooltip={'off'}
                        />
                    </Col>
                    </Row>
                </FormGroup>
                <Row className="justify-content-center">
                <TodoTagForm 
                selectedTodoTagIds={selectedTodoTagIds}
                onToggleTodoTag={onToggleTodoTag}
                />
                </Row>
                <Row className="justify-content-center">
                    <Button   
                    onClick ={(e)=>{
                        e.preventDefault();
                        constructNewTodo();
                    }}
                    >{isEditMode ? "Update Todo" : "Submit Todo"}</Button>
                </Row>
            </Form>
            </Row>
        </Container>
            
    )
}