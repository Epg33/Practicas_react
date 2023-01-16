import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Nav } from './components'
import { Gif, List, Random, SearchGif, StickerList } from './pages'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/random' element={<Random />}></Route>
        <Route path='/gif' element={<Gif />}></Route>
        <Route path='/searchgif' element={<SearchGif />}></Route>
        <Route path='/stickerslist' element={<StickerList />}></Route>
      </Routes>
    </Router>  
  )
}

export default App
