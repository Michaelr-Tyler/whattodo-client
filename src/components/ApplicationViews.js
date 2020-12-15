import React from "react";
import { Route, Redirect } from "react-router-dom";


export const ApplicationViews = () => {
        return (
            <>
              <Route
                path="/logout"
                render={() => {
                  // Removes the user Id and Token from local storage and redirects the user back to log in
                  localStorage.removeItem("user_id");
                  localStorage.removeItem("user_token");
                  return <Redirect to="/login" />;
                }}
              />
            </>
    )
}
