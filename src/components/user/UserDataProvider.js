import React, { createContext, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { current_user_id } from "../utils/helper";
import { request } from "../utils/request";


export const UserContext = createContext();


export const UserDataProvider = props => {
  const[user, setUser] = useState({})
  
  const getCurrentUser = async ()=>{
    const response = await request(`http://localhost:8000/user/${current_user_id}`)
    const user = await response.json()
    setUser(user)

}

return(
  <UserContext.Provider value={{
    user,
    getCurrentUser

  }}>
    {props.children}
  </UserContext.Provider>
)
}
