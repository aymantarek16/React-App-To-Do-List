import React, {useRef, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.scss";
import TodosList from "./components/TodosList";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();


  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            ref={inputRef}
          />
        </div>

        <div>
          <TodosList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
