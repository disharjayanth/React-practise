import { ADD_TODOS, REMOVE_TODOS } from '../constants/todos'

export const todosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return { ...state, todos: [...state.todos, action.payload] }
    case REMOVE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      }
    default:
      return state
  }
}
