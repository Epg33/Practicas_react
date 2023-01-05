import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { List } from './pages'
import Test from './Test.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Test />}></Route>
      </Routes>
    </Router>  
  )
}

export default App
