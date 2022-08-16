import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  //   Complate Button
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  //   Edit Button
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  //   Delete Button
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />

            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i
                className={`fa ${
                  todo.completed ? "fa-close" : "fa-check-circle"
                }`}
              ></i>
            </button>

            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>

            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </li>
        ))
      ) : (
        <h6
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "23px",
            color: "white",
          }}
        >
          There are no tasks
        </h6>
      )}
    </div>
  );
};

export default TodosList;
