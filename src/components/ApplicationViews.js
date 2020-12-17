import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CategorieProvider } from "./category/CategoryDataProvider";
import TodoAccordian from "./todos/TodoAccordian";
import { TodoProvider } from "./todos/TodoDataProvider";
import { TagsProvider } from "./tags/TagsDataProvider";
import { TagManager } from "./tags/TagManager";



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
              <main className="container p-5">
                  <TodoProvider>
                    <CategorieProvider>
                      <Route exact path="/" component={TodoAccordian} />
                    </CategorieProvider>
                  </TodoProvider>
                  <TagsProvider>
                    <Route exact path="/tags" component={TagManager} />
                  </TagsProvider>
              </main>
            </>
    )
}
