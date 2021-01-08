import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CategorieProvider } from "./category/CategoryDataProvider";
import { TodoProvider } from "./todos/TodoDataProvider";
import { TagsProvider } from "./tags/TagsDataProvider";
import { TodoForm } from "./todos/TodoForm";
import { TodoList } from "./todos/TodoList";
import { Dashboard } from "./dash/Dashboard";
import { Container } from "react-bootstrap";
import { UserDataProvider } from "./user/UserDataProvider";
import { TagForm } from "./tags/TagForm";
import { TagList } from "./tags/TagList";

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
              <Container fluid="xs">
                  <TodoProvider>
                  <CategorieProvider>
                  <UserDataProvider>
                      <Route exact path="/" component={Dashboard} />
                  </UserDataProvider>
                  </CategorieProvider>
                  </TodoProvider>
                  <TagsProvider>
                      <Route exact path="/tags" component={TagForm} />
                      <Route exact path="/tags" component={TagList} />
                  </TagsProvider>
                  <TodoProvider>
                  <TagsProvider>
                  <CategorieProvider>
                      <Route exact path="/todo" component={TodoList} />
                      <Route exact path="/todo/form" component={TodoForm} />
                      <Route path="/todo/form/:todoId" component={TodoForm} />
                  </CategorieProvider>
                  </TagsProvider>
                  </TodoProvider>
              </Container>
            </>
    )
};
