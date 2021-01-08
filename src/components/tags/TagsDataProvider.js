import React, {createContext, useState} from 'react';
import { BASE_URL, request } from "../utils/request";



export const TagContext = createContext();

export const TagsProvider = props =>{
    const[tags, setTags] = useState([]);

    

    const getTags = async ()=>{
        const response = await request(`${BASE_URL}/tags`)
        const tags = await response.json()
        setTags(tags)
    }

    const createTag = async (tag) => {
        return await request(`${BASE_URL}/tags`, 'POST', tag)
    }

    const updateTag = async (tagId, tag) => {
        return await request(`${BASE_URL}/tags/${tagId}`,'PUT', tag)
    }

    const deleteTag = async (tagId) => {
        return await request(`${BASE_URL}/tags/${tagId}`, 'DELETE')
    }

    return (
        <TagContext.Provider value={{
            tags, getTags, createTag, updateTag, deleteTag
        }}>
            {props.children}
        </TagContext.Provider>
    )
}