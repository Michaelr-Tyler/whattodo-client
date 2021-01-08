import React, {createContext, useState} from 'react';
import { BASE_URL, request } from "../utils/request";



export const TodoContext = createContext();

export const TodoProvider = props =>{
    const[todos, setTodos] = useState([]);


    const getTodos = async ()=>{
        const response = await request(`${BASE_URL}/todos`)
        const todos = await response.json()
        setTodos(todos)
    }

    const getSingleTodo = async (id)=>{
        const response = await request(`${BASE_URL}/todos/${id}`)
        const todo = await response.json()
        return todo
    }

    const getTodosByCategory = async (categoryId)=>{
        const response = await request(`${BASE_URL}/todos?categories=${categoryId}`)
        const todos = await response.json()
        setTodos(todos)
    }

    const getTodosByTag = async (tagId)=>{
        const response = await request(`${BASE_URL}/todos?tagId=${tagId}`)
        const todos = await response.json()
        setTodos(todos)
    }

    const createTodo = async (todo) => {
        return await request(`${BASE_URL}/todos`,'POST', todo)
    }

    const updateTodo = async (todoId, todo) => {
        return await request(`${BASE_URL}/todos/${todoId}`,'PUT', todo)
    }

    const deleteTodo = async (todoId) => {
        return await request(`${BASE_URL}/todos/${todoId}`, 'DELETE')
    }

    return (
        <TodoContext.Provider value={{
            todos, 
            getTodos, 
            createTodo, 
            updateTodo, 
            deleteTodo, 
            getTodosByCategory, 
            getSingleTodo,
            getTodosByTag
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}