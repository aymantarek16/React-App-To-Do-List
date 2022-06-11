import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a todo"
        className="text-input"
        value={input}
      />
      <button className="button-add" type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default Form;
