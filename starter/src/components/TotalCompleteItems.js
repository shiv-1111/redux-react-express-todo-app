import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return (
    <h4 className="mt-3 text-light">
      Completed Tasks:&nbsp;
      <span className="text-success">{completedTodos.length}</span>
    </h4>
  );
};

export default TotalCompleteItems;
