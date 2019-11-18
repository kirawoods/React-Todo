import React, { Component } from "react";
import { ToDo } from "./components/TodoComponents/Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      someValue: ""
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <ToDo />
      </div>
    );
  }
}

export default App;
