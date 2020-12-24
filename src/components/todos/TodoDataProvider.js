import React, {createContext, useState} from 'react';
import { request } from "../utils/request";



export const TodoContext = createContext();

export const TodoProvider = props =>{
    const[todos, setTodos] = useState([]);

    

    const getTodos = async ()=>{
        const response = await request(`http://localhost:8000/todos`)
        const todos = await response.json()
        setTodos(todos)
    }

    const createTodo = async (todo) => {
        return await request(`http://localhost:8000/todos`,'POST', todo)
    }

    const updateTodo = async (todoId, todo) => {
        return await request(`http://localhost:8000/todos/${todoId}`,'PUT', todo)
    }

    const deleteTodo = async (todoId) => {
        return await request(`http://localhost:8000/todos/${todoId}`, 'DELETE')
    }

    return (
        <TodoContext.Provider value={{
            todos, getTodos, createTodo, updateTodo, deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}