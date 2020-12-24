import React, { useContext, useEffect, useState } from "react"
import { DropdownButton, Dropdown } from "react-bootstrap";
import { CategoryContext } from "../category/CategoryDataProvider";


export const CategoryDropDown = (props) => {
    const { categories, getCategories} = useContext(CategoryContext)
    const [filteredTodos, setFiltered] = useState({})
    console.log(filteredTodos)

    useEffect(()=>{
        getCategories()
        },[])
    
    const handleDropDownChange = (CategoryId) => {
        setFiltered(CategoryId)
        console.log(filteredTodos)
    }

    return (
                <DropdownButton id="dropdown-basic-button" title="Categories">
                    {categories.map((c)=>{
                        return (
                        <Dropdown.Item 
                        key={c.id} 
                        onChange={(e)=> {
                            e.preventDefault()
                            handleDropDownChange(c.id)}}>
                            {c.label}
                        </Dropdown.Item>
                        )
                    })}
                </DropdownButton>
    )
} 