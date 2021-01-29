import React from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <i className="fas fa-th-list"></i> little todo list
        </h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
