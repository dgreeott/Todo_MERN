import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiDelete, FiEdit } from "react-icons/fi";

export const deleteTodo = (id) => {
  return axios.delete("/todos/delete/" + this.props.match.params.id);
};

export const Todo = (props) => (
  <>
    <div className="container-flex m-2 text-light">
      <div className={props.todo.todo_completed ? "completed" : ""}>
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <h5>{props.todo.todo_description}</h5>
          </div>
          <div className="col-sm-2 text-end">
            <Link to={"/edit/" + props.todo._id}>
              <FiEdit size="25" />
            </Link>
            <Link
              to={"/delete/" + props.todo._id}
              onClick={() => axios.delete(`/delete/${props.todo_id}`)}
            >
              <FiDelete size="25" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);
