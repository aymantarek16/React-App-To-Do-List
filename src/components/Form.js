import React from "react";
import { v4 as uuidv4 } from "uuid";



const Form = ({ input, setInput, todos, setTodos }) => {

  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };
  

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo"
        className="text-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </form>
  );
};

export default Form;
