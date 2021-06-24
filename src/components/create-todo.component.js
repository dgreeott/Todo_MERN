import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

 class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_priority: "",
      todo_completed: false,
    };
  }

  onChangeTodoDescription = (e) => {
    this.setState({
      todo_description: e.target.value,
    });
  };


  onChangeTodoPriority = (e) => {
    this.setState({
      todo_priority: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    /*
    console.log(`Form submitted: `);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    console.log(`Todo Completed: ${this.state.todo_completed}`);
    */

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed,
    };

    axios.post("http://localhost:4000/todos/add", newTodo).then((res) => {
      console.log(res.data);
    });

    this.setState({
      todo_description: "",
      todo_priority: "",
      todo_completed: false,
    });

    
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div className="row justify-content-center " style={{ margin: 50 }}>
          <h3>New Task</h3>
        </div>
        <div className="container justify-content-center">
          <div className="row justify-content-center">
            <div className="col-sm-6 justify-content-center">
              <form onSubmit={this.onSubmit}>
                <div className="row justify-content-center">
                  <div className="col-sm-8 justify-content-center">
                    <div className="form-group text-center">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="priorityOptions"
                          id="priorityImportant"
                          value="Important"
                          checked={this.state.todo_priority === "Important"}
                          onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">Important</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="priorityOptions"
                          id="priorityIrrelevant"
                          value="Irrelevant"
                          checked={this.state.todo_priority === "Irrelevant"}
                          onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">Irrelevant</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center m-2">
                  <div className="col-sm-8 justify-content-center">
                    <div className="form-group">
                      <label>Description: </label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.todo_description}
                        onChange={this.onChangeTodoDescription}
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center m-3">
                  <div className="col-sm-8 justify-content-center">
                    <div className="form-group text-center">
                      <input
                        type="submit"
                        value="Create Task"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CreateTodo);
