import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Contenido1 from '../paginas/Contenido1'
import Contenido2 from '../paginas/Contenido2'
import Contenido3 from '../paginas/Contenido3'
import NavBar from '../navBar/NavBar'

const Router2 = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='contenido1' element={<Contenido1 />}></Route>
        <Route path='contenido2' element={<Contenido2 />}></Route>
        <Route path='contenido3' element={<Contenido3 />}></Route>
        <Route path='/' element={<Navigate to='contenido1' />}></Route>
      </Routes>
    </>
  )
}

export default Router2