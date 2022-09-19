import React, { useContext } from 'react'
import { Contexto } from './Contexto/Contexto'

function Pagina2() {
    const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{background: color}}>
        Pagina2
    <h1>{color}</h1>
    </div>
  )
}

export default Pagina2;