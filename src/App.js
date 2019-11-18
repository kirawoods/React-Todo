import React, { Component } from "react";
import { ToDoForm } from "./components/TodoComponents/TodoForm";
import { ToDoList } from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { task: "Beep the Boops", id: 123, completed: false },
        { task: "Debug the Beeps", id: 124, completed: false },
        { task: "Debug the Boops", id: 125, completed: false }
      ]
    };
  }

  addToDo = event => {
    event.preventDefault();
    const newToDo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newToDo],
      todo: ""
    });
  };

  changeToDo = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleCompleted = id => {
    let todos = this.state.todos.slice();

    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="app-container">
        <ToDoList
          handleToggleComplete={this.toggleCompleted}
          todos={this.state.todos}
        />
        <ToDoForm
          value={this.state.todo}
          handleToDoChange={this.changeToDo}
          handleAddToDo={this.addToDo}
          handleClearToDos={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
