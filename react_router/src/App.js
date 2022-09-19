import A from './paginas/A';
import B from './paginas/B';
import C from './paginas/C';
import D from './paginas/D';
import './App.css';
import Error404 from './paginas/Error404';
import Nav from './Nav';
import Nav_act from './Actividad_1/Nav_act';
import Page from './Actividad_1/Page';
import Rey from './Actividad_1/Rey';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [display, setDisplay] = useState(<Nav/>)
  const theDisplay = () => {
    setDisplay(Nav)
  }

  const theActivity = () => {
    setDisplay(Nav_act)
  }
  return (
    <>
    <button onClick={theDisplay}>Display</button>
    <button onClick={theActivity}>Actividad</button>
    <BrowserRouter>
      {display}
      <Routes>
        <Route path='/' element={<A/>}></Route>
        <Route path='/pagina2' element={<B/>}></Route>
        <Route path='/pagina3' element={<C/>}></Route>
        <Route path='/pagina4/:letra' element={<D/>}></Route>
        <Route path='/pagina1' element={<Navigate to='/'/>}></Route>
        <Route path="/Page" element={<Page/>}></Route>
        <Route path='/rey/:nombre' element={<Rey />}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
