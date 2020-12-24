import React, { useContext, useEffect, useRef, useState } from "react"
import { Form } from "react-bootstrap";
import { CategoryContext } from "../category/CategoryDataProvider";


export const CategorySelect = (props) => {
    const { categories, getCategories} = useContext(CategoryContext)

    useEffect(()=>{
        getCategories()
        },[])


    return (
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control size="sm" as="select" 
                    onChange={(e)=>{
                        e.preventDefault() 
                        props.onChange(e.target.value)
                        }}>
                        <option value={"0"}>Filter by category</option>
                        {categories.map((c)=>{
                            return (
                            <option key={c.id} value={c.id}>
                              {c.label}
                            </option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>
    )
} 