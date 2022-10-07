import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'

const Router2 = () => {
  return (
    <>
      <Routes>
        <Route path='contenido1' element={<Contenido1 />}></Route>
        <Route path='contenido2' element={<Contenido2 />}></Route>
        <Route path='contenido3' element={<Contenido3 />}></Route>
        <Route path='*' element={<Navigate to='contenido1' />}></Route>
      </Routes>
    </>
  )
}

export default Router2