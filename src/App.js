import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  render() {
    return (
      <>
        <Helmet
          bodyAttributes={{
            style:
              "background-color: rgba(39, 29,41)",
          }}
        />
          <Router>
            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
          </Router>
      </>
    );
  }
}

export default App;
