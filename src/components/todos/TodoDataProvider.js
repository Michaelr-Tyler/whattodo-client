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

    return (
        <TodoContext.Provider value={{
            todos, getTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}