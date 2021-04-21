import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Todo } from "./todo.component";


export default class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [],
    inProgress: [],
  completed: [] };
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

  progessList = () => {
    return this.state.todos.map(function (progressTodo, i) {
      return <Todo inProgress={progressTodo} key={i} />;
    });
  };

  completedList = () => {
    return this.state.todos.map(function (completedTodo, i) {
      return <Todo completed={completedTodo} key={i} />;
    });
  };

  render() {
    return (
      <>
        <div className="container justify-content-center mt-5">
          <div className="row justify-content-center m-5">
            <h2>To Do List</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm">
                  <h3>To Do</h3>
                </div>
                <div className="col-sm-4 text-end">
                  <Link to={"/create/"}>
                    <h5 className="btn-sm btn-primary text-center">New Task</h5>
                  </Link>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm">{this.todoList()}</div>
              </div>
            </div>
            <div className="col-sm text-center">
              <div className="row">
                <div className="col-sm">
                  <h3>In Progress</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm">{this.progressList()}</div>
              </div>
            </div>
            <div className="col-sm text-center">
              <div className="row">
                <div className="col-sm">
                  <h3>Completed</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm">{this.completedList()}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

/*
        <table className="table table-script" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        */
