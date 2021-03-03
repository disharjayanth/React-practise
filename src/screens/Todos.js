import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoRemove, todosAdd } from '../actions/todosAction'

function Todos() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)

  const addTodo = () => {
    dispatch(todosAdd(todo))
    setTodo('')
  }

  const completeTodo = (todo) => {
    dispatch(todoRemove(todo))
  }

  return (
    <>
      <h2>Hello World</h2>
      <h3>Todos App</h3>
      <h4>List of Todos</h4>
      <ul>
        {todos.map((eachTodo, index) => (
          <li onClick={() => completeTodo(eachTodo)} key={index}>
            {eachTodo}
          </li>
        ))}
      </ul>
      <input onChange={(e) => setTodo(e.target.value)} value={todo}></input>
      <button onClick={addTodo}>Add +</button>
    </>
  )
}

export default Todos
