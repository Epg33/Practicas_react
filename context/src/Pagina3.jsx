import React, { useContext } from 'react'
import { Contexto } from './Contexto/Contexto'

function Pagina3() {
    const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{background: color}}>
        Pagina3
    <h1>{color}</h1>
    </div>
  )
}

export default Pagina3;