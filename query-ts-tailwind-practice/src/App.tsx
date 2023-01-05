import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { List } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<List />}></Route>
      </Routes>
    </Router>  
  )
}

export default App
