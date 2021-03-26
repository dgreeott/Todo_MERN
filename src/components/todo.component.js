import React from "react";
import { Link } from "react-router-dom";

export const Todo = (props) => (
  /*
    <tr>
        <td >{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
        <p class="card-text">{props.todo.todo_priority}</p>
    </tr>
    */

  <div className="card m-3">
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
              <h5>Delete</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
