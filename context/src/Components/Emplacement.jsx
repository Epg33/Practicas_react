import React, { useContext } from 'react';
import { Context_Act } from "../Contexto/Context_Act"

function Emplacement() {
    const { index, setIndex, valores } = useContext(Context_Act);
  return (
    <div>
      <h2>{valores[index].boton2}</h2>
      <p>{valores[index].direccion}</p>
    </div>
  );
}

export default Emplacement