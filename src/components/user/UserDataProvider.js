import React, { createContext, useState } from "react";
import { request } from "../utils/request";


export const UserContext = createContext();


export const UserDataProvider = props => {
  const[user, setUser] = useState({})

  const getCurrentUser = async ()=>{
    const response = await request(`http://localhost:8000/user/${localStorage.getItem("user_id")}`)
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
