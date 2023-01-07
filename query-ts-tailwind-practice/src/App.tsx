import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { List, Random } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/random' element={<Random />}></Route>
      </Routes>
    </Router>  
  )
}

export default App
