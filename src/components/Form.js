import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  }
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
      <button className="button-add" type="submit" >
        Add
      </button>
    </form>
  );
};

export default Form;
