import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";



export const deleteTodo = (id) => {
  return axios.delete('/pieces/delete' + id);
};


export const Todo = (props) => (  

  <div className="card  m-3">
    <div className={props.todo.todo_completed ? "completed" : ""}>
      <div className="card-body">
        <h5 className="card-title">{props.todo.todo_responsible}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.todo.todo_description}
        </h6>

        <div className="row justify-content-end">
          <div className="btn-group dropdown ">
            <button
              type="button"
              className="btn "
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ...
            </button>
            <div className="dropdown-menu text-center">
              <Link to={"/edit/" + props.todo._id}>
                <h5>Edit</h5>
              </Link>
              <div className="dropdown-divider"></div>
              <Link to={"/todos/" + props.todo._id} onClick={() => axios.delete(`/todos/${props.todo_id}`)}>
                <h5>Delete</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
