import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Clase from './clase'
import PruebaSwr from './PruebaSwr'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Clase />}></Route>
        <Route path='/swr' element={<PruebaSwr />}></Route>
      </Routes>
    </Router>
  )
}

export default App