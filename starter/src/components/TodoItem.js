import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleCompleteAsync({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodoAsync({ id: id }));
  };

  return (
    <li
      className={`list-group-item border-light `}
      style={{ background: "black" }}
    >
      <div className="d-flex justify-content-between">
        <span
          className={`d-flex align-items-center ${
            completed ? "text-success" : "text-primary"
          }`}
          style={{ fontWeight: "500" }}
        >
          <input
            type="checkbox"
            className="mr-3 shadow"
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger shadow" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
