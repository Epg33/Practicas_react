import React, { useContext, useState } from "react";
import { Context_Act } from "../Contexto/Context_Act";
import Show from "./Show";
import Emplacement from "./Emplacement";

function Info() {
  const { index, setIndex, valores } = useContext(Context_Act);
  const [display, setDisplay] = useState();

  return (
    <div>
      <h3>{valores[index].titulo}</h3>
      <p>{valores[index].texto}</p>
      <div>
        <button
          onClick={() => {
            setDisplay(Show);
          }}
        >
          {valores[index].boton1}
        </button>
        <button
          onClick={() => {
            setDisplay(Emplacement);
          }}
        >
          {valores[index].boton2}
        </button>
        <div>{display}</div>
      </div>
    </div>
  );
}

export default Info;
