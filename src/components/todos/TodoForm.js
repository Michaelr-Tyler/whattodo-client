//component to handle todo's added and edited
import React,{useRef, useState, useContext, useEffect} from "react";
import { Form, FormGroup, Row, Col } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { TodoTagForm } from "../todotags/TodoTagForm";
import SubmitButton from "../utils/SubmitButton";
import { TodoContext } from "./TodoDataProvider";


export const TodoForm = (props) => {
    const {createTodo, updateTodo, getSingleTodo} = useContext(TodoContext)
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
                .then(props.history.push(`/`))
            } else {
                createTodo(newTodo)
                .then(props.history.push(`/`))
            }
        }
    }

    return (

                <Form  style={{ width: '40rem' }}>
                    <h1 className="text-center my-4">
                        {isEditMode ? "Edit Todo" : "Create Todo"}
                    </h1>
                    <FormGroup>
                        <Col>
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="text" placeholder="Enter a task" ref={taskRef} />
                        </Col>
                    </FormGroup>  
                    <FormGroup>
                        <Row sm={1} md={4}>
                        <Col lg="6">
                        <Form.Label column sm="4">
                        Importance
                        </Form.Label>
                            <div className="text-muted">
                                Think about scoring this higher if you must complete this, 
                                or perhaps someone else is uncapable of completing this task.

                            </div>
                            <RangeSlider
                                value={importantRating}
                                onChange={e => setImportantRating(e.target.value)}
                                min = {0}
                                max = {10}
                                tooltip={'off'}
                            />
                        </Col>
                        <Col lg="6">
                        <Form.Label column sm="4">
                        Urgency
                        </Form.Label>
                            <div className="text-muted">
                            Think about scoring this higher if you need to complete this by today or tomorrow. 
                            </div>
                            <RangeSlider
                                value={urgentRating}
                                onChange={e => {
                                    setUrgentRating(e.target.value)}}
                                min = {0}
                                max = {10}
                                tooltip={'off'}
                            />
                        </Col>
                        </Row>
                    </FormGroup>
                    <TodoTagForm 
                    selectedTodoTagIds={selectedTodoTagIds}
                    onToggleTodoTag={onToggleTodoTag}
                    />
                    <Row>
                        <SubmitButton 
                        label={isEditMode ? "Update Todo" : "Submit Todo"}
                        onClick ={(e)=>{
                            e.preventDefault();
                            constructNewTodo();
                        }}
                        />
                    </Row>
                </Form>
    )
}