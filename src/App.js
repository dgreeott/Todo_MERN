import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import "./App.scss";


import Navbar from "./components/Navbar/Navbar";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Helmet
            bodyAttributes={{
              style: "background-color: rgba(39, 29,41)",
            }}
          />
          <Switch>
            <Route path="/" exact component={TodosList}>
              <TodosList />
            </Route>

            <Route path="/edit/:id" >
              <Navbar />
              <EditTodo />
            </Route>
            <Route path="/create" component={CreateTodo}>
              <Navbar />
              <CreateTodo />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
