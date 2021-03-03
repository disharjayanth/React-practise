import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/fetchUsersAction'

function FetchData() {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)

  const fetchData = () => {
    dispatch(fetchUsers())
  }

  return (
    <>
      <h2>Fetching some JSON data: click button to fetch</h2>
      <button onClick={fetchData}>Fetch</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>Name: {user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default FetchData
