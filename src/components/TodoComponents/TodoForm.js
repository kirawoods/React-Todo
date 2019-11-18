import React from "react";
import "./Todo.css";

export const ToDoForm = props => {
  return (
    <form>
      <input
        className="item-input"
        onChange={props.handleToDoChange}
        type="text"
        name="todo"
        value={props.todo}
        placeholder={props.todo}
      />
      <br />
      <button className="button" onClick={props.handleAddToDo}>
        Add Item
      </button>
      <button className="button" onClick={props.handleClearToDos}>
        Clear Completed Items
      </button>
    </form>
  );
};
