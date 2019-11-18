import React from "react";
import "./Todo.css";

export const ToDoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleToDoChange}
        type="text"
        name="todo"
        placeholder="Add a New Task"
      />
      <button onClick={props.handleAddToDo}>Add Item</button>
      <button onClick={props.handleClearToDos}>Clear Completed Items</button>
    </form>
  );
};
