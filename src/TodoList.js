import { Component } from "react";
import './TodoList.css';


class TodoList extends Component {
     state = {
        newTask: "",
        todos: [
          { text: "learn ReactJs", id: 1 },
          { text: "learn NodeJs", id: 2 },
        ],
      };

  removeTask = (index) => {
    const todos = [...this.state.todos]; // Copy This Array
    todos.splice(index, 1);

    this.setState({
      todos,
    });
  };

  updateNewTask = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  addTask = () => {
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask,
    });
    this.setState({
      todos,
      newTask: "",
    });
  };

  render() {
    return (
      <div className="todolist">
        <h2>To Do List</h2>

        {this.state.todos.map((todo, index) => (
          <li key={index}>
            <span>{todo.text}</span>
            <button
              onClick={() => this.removeTask(index)}
              className="btn btn-danger"
            >
              Clear
            </button>
          </li>
        ))}

        <input
          className="form-control"
          placeholder="Add Task.."
          value={this.state.newTask}
          onChange={this.updateNewTask}
        />
        <button onClick={this.addTask} className="btn btn-info">
          Add Task
        </button>
      </div>
    );
  }
}

export default TodoList;
