import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_priority: "",
      todo_completed: false,
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/todos/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_priority: response.data.todo_priority,
          todo_completed: response.data.todo_completed,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

  onChangeTodoCompleted = (e) => {
    this.setState({
      todo_completed: !this.state.todo_completed,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      todo_description: this.state.todo_description,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed,
    };

    axios
      .post(
        "http://localhost:4000/todos/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data))
      .catch(function (error) {
        console.log(error);
      });

    this.props.history.push("/");
  };

  render = () => {
    return (
      <>
        <div className="row justify-content-center " style={{ margin: 50 }}>
          <h3 className="text-light">Update To Do</h3>
        </div>
        <div
          className="container justify-content-center"
          style={{ color: "white" }}
        >
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
                <div className="row justify-content-center m-3">
                  <div className="col-sm-8 text-center">
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

                <div className="row justify-content-center">
                  <div className="form-check text-center">
                    <input
                      type="radio"
                      classnName="form-check-input"
                      id="completedCheckbox"
                      name="completedCheckbox"
                      onChange={this.onChangeTodoCompleted}
                      checked={this.state.todo_completed === false}
                      value={this.state.todo_completed === false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="completedCheckbox"
                    >
                      In Progress
                    </label>
                  </div>
                  <div className="form-check text-center">
                    <input
                      type="radio"
                      classnName="form-check-input"
                      id="completedCheckbox"
                      name="completedCheckbox"
                      onChange={this.onChangeTodoCompleted}
                      checked={this.state.todo_completed === true}
                      value={this.state.todo_completed === true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="completedCheckbox"
                    >
                      Completed
                    </label>
                  </div>
                </div>
                <br />
                <div className="row justify-content-center m-3">
                  <div className="col-sm-8 justify-content-center">
                    <div className="form-group text-center">
                      <input
                        type="submit"
                        value="Update"
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
  };
}

export default withRouter(EditTodo);
