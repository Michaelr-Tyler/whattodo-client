//component to handle todo's added and edited
import React,{ useState, useContext, useEffect, useRef} from "react";
import { Form, FormGroup, Row, Col, Container, Button } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { TodoTagForm } from "../todotags/TodoTagForm";
import { TodoContext } from "./TodoDataProvider";


export const TodoForm = (props) => {
    const {createTodo, updateTodo, getSingleTodo, getTodos} = useContext(TodoContext)
    
    const [importantRating, setImportantRating] = useState(5)
    const [urgentRating, setUrgentRating] = useState(5)
    const [task, setTask] = useState("")
    //set the initial todo tag id array to an empty one, 
    //when sending a Todo object to the server it will be expecting an array of either tag Ids or just an empty array.
    const [selectedTodoTagIds, setSelectedTodoTagIds] = useState([])
    const handleTextareaChange = (e) => {
        setTask(e.target.value)  
    }
    const isEditMode = props.match.params.hasOwnProperty("todoId")

    useEffect(()=>{
        if(isEditMode){
            getSingleTodo(props.match.params.todoId)
            .then(populateFormValues)
        } 
    },[])


    const populateFormValues = (todo) => {
        setTask(todo.task)
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
            // if validation success - create a new object from the form inputs and then either save or update it
            const newTodo = {
                task: task,
                urgent: parseInt(urgentRating),
                important: parseInt(importantRating),
                tagIds: selectedTodoTagIds
            }

            if(!task){
                window.alert("Please fill in a task")
            } else {
                if(isEditMode) {
                    updateTodo(props.match.params.todoId, newTodo)
                    .then(getTodos)
                    .then(props.history.push(`/todo`))
                } else {
                    createTodo(newTodo)
                    .then(getTodos)
                    const clearedTask = ""
                    setTask(clearedTask)
                    setImportantRating(5)
                    setUrgentRating(5)
                    setSelectedTodoTagIds([])
                }
            }
        
    }

    return (
            
        <Container className="mt-5" fluid>
            <Row className="justify-content-center">
            <Form style={{width:'30rem', background:"#DDE2E3", borderRadius:"50px", padding:"25px"}}>
                <Col className="d-flex justify-content-center">
                <h1  style={{color:"#2A2B26", fontSize:"50px", width:"25rem"}} className="d-flex justify-content-center">
                    {isEditMode ? "Edit Todo" : "Add a new todo"}
                </h1>
                </Col>
                <FormGroup>
                    <Col className="justify-content-center">
                    <Form.Control 
                    onChange={handleTextareaChange}
                    as='input'
                    name='content' 
                    placeholder="Enter a task" 
                    value={task} 
                    style={{fontWeight:"bold"}} 
                     />
                    </Col>
                </FormGroup>  
                <FormGroup>
                    <Row>
                    <Col  className="text-center">
                    <Form.Label style={{color:"#2A2B26", fontWeight:"bold"}}>
                    Importance
                    </Form.Label>
                        <div className="text-muted">
                            Think about scoring this higher if you must be the one to complete this.
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
                    </Row>
                    <Row>
                    <Col className="text-center">
                    <Form.Label  style={{color:"#2A2B26", fontWeight:"bold"}}>
                    Urgency
                    </Form.Label>
                        <div className="text-muted">
                        Think about scoring this higher if you need to complete this by today or tomorrow.
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
                {isEditMode ? <Row className="justify-content-center">
                    <Button   
                    onClick ={(e)=>{
                        e.preventDefault();
                        constructNewTodo();
                    }}
                    >Update Todo</Button>
                </Row> : 
                <Row className="justify-content-center">
                    <Button   
                    onClick ={(e)=>{
                        e.preventDefault();
                        constructNewTodo();
                    }}
                    >Add Todo</Button>
                    <Button 
                    className="ml-3"
                    onClick ={(e)=>{
                        e.preventDefault();
                        props.history.push('/todo');
                    }}>Done</Button>
                </Row>
                }
            </Form>
            </Row>
        </Container>
            
    )
}