import axios from 'axios'
import { FETCH_USERS } from '../constants/fetchUsers'

export const fetchUsers = () => async (dispatch) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  dispatch({
    type: FETCH_USERS,
    payload: data,
  })
}
