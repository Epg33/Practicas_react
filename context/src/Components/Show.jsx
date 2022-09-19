import React, { useContext } from 'react'
import { Context_Act } from "../Contexto/Context_Act"
import '../images/aimee.PNG'

function Show() {
    const { index, setIndex, valores } = useContext(Context_Act);
    const imagen = `../images/${valores[index].foto}`
  return (
    <div>
      <h2>{valores[index].boton1}</h2>
      <img src='aimee.PNG' />
      <p>{valores[index].nombre}</p>
    </div>
  )
}

export default Show