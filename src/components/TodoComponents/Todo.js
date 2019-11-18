import React, { Component } from "react";
import "./Todo.css";

export class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      someValue: ""
    };
  }
  render() {
    return <h1>To-Do List</h1>;
  }
}
