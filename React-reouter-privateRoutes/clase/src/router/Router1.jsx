import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../paginas/Login'
import Recuperacion from '../paginas/Recuperacion'
import Router2 from './Router2'

 
const Router1 = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='recuperacion' element={<Recuperacion />}></Route>
        <Route path='*' element={<Router2 />}></Route>
      </Routes>
    </>
  )
}

export default Router1