import React, { useState } from "react";
// action
import { addTodoAsync } from "../redux/todoSlice";
// dispatcher
import { useDispatch } from "react-redux";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered: " + value);
    dispatch(
      addTodoAsync({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2 shadow-sm"
        placeholder="Add todo 📃..."
        value={value}
        autoComplete={false}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn shadow-sm btn-success fw-bold mb-2">
        Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;
