import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, inputRef }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };

  
  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo"
        className="text-input"
        value={input}
        required
        onChange={onInputChange}
        ref={inputRef}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
