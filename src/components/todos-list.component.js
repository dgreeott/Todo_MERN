import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Todo } from "./todo.component";

export default class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], inProgress: [], completed: [] };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidUpdate = () => {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  todoList = () => {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  };

  render() {
    return (
      <>
        <div className="container justify-content-center mt-5">
          <div className="d-flex">
            <div
              className="row justify-content-center m-5"
              style={{ color: "white" }}
            >
              <h2>To Do List</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm">
                <div className="row justify-content-center">
                  <div className="col-sm-2 text-center">
                    <Link to={"/create/"}>
                      <h5 className="btn-sm btn-primary text-center">
                        New Task
                      </h5>
                    </Link>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm text-center">{this.todoList()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
