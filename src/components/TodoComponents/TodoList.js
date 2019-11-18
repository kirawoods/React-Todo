import React from "react";
import "./Todo.css";
import { ToDo } from "./Todo";

export const ToDoList = props => {
  return (
    <div>
      <h2>My Tasks</h2>
      {props.todos.map(todo => {
        return (
          <ToDo
            handleToggleComplete={props.handleToggleComplete}
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </div>
  );
};
