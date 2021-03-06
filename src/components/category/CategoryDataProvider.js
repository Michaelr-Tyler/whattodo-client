import React, {createContext, useState} from 'react';
import { BASE_URL, request } from "../utils/request";



export const CategoryContext = createContext();

export const CategorieProvider = props =>{
    const[categories, setCategories] = useState([]);

    

    const getCategories = async ()=>{
        const response = await request(`${BASE_URL}/categories`)
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