import React, { createContext, useState } from "react";
import { BASE_URL, request } from "../utils/request";


export const UserContext = createContext();


export const UserDataProvider = props => {
  const[user, setUser] = useState({})

  const getCurrentUser = async ()=>{
    const response = await request(`${BASE_URL}/user/${localStorage.getItem("user_id")}`)
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
