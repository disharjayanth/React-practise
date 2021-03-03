import { ADD_TODOS, REMOVE_TODOS } from '../constants/todos'

export const todosAdd = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODOS,
    payload: todo,
  })
}

export const todoRemove = (todo) => (dispatch) => {
  dispatch({
    type: REMOVE_TODOS,
    payload: todo,
  })
}
