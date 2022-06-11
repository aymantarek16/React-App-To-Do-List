import React from 'react'

const TodosList = ({todos,setTodos}) => {
  return (
    <div>{todos.map((todo)=> (
        <li className='todo-list' key={todo.id} >
            {todo.title}
        </li>
    ))}</div>
  )
}

export default TodosList ;