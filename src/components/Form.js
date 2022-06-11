import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  
  const updateTodo = (title, id, complete) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? { title, id, complete } : todo
    );
    setTodos(newTodo);
    setEditTodo("")
  };


  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {  
      updateTodo(input, editTodo.id, editTodo.completed);
    }
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
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
