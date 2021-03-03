import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import FetchData from './screens/FetchData'
import Todos from './screens/Todos'

function App() {
  return (
    <Router>
      <h2>Home</h2>
      <Header />
      <Route path="/todos" component={Todos} />
      <Route path="/fetch" component={FetchData} />
    </Router>
  )
}

export default App
