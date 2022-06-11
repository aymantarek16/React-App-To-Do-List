import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import TodoList from './TodoList';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById("root")
);
