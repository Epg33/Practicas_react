import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

const RutasPublicas = ({children}) => {
  const {estado} = useContext(Contexto)
  return (!estado)
  ? children
  : <Navigate to='/contenido1' />
}

export default RutasPublicas