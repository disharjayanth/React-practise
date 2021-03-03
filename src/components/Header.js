import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Link to="/todos">Todos</Link>
      <br />
      <Link to="/fetch">Fetch Users</Link>
    </>
  )
}

export default Header
