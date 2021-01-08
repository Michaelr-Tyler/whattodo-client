import React, {createContext, useState} from 'react';
import { request } from "../utils/request";



export const CategoryContext = createContext();

export const CategorieProvider = props =>{
    const[categories, setCategories] = useState([]);

    

    const getCategories = async ()=>{
        const response = await request(`http://michaeltyler.pythonanywhere.com/categories`)
        const categories = await response.json()
        setCategories(categories)
    }

    return (
        <CategoryContext.Provider value={{
            categories, getCategories
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}