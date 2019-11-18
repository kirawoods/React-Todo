import React from "react";
import "./Todo.css";

export const ToDo = props => {
  return (
    <div
      className={`item${props.todo.completed ? "completed" : ""}`}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};
