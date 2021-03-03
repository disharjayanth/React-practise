import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { testReducer } from './reducers/testReducer'
import { todosReducer } from './reducers/todosReducer'
import { fetchUsersReducer } from './reducers/fetchUsersReducer'

const reducer = combineReducers({
  test: testReducer,
  todos: todosReducer,
  users: fetchUsersReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
