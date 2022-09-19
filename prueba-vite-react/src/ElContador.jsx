import React from "react";
import { useState } from "react";

function ElContador({ nombre }) {
  const [cont, setCont] = useState(0);
  //suma con el state
  const sumar = () => {
    setCont(cont + 1);
  };
  //suma sin el state
  const prove = (e) => {
    ++e.target.innerHTML;
  };
  return (
    <>
      <div className="contador">
        <h3>{nombre}</h3>
        <div onClick={sumar}>{cont}</div>
        <div onClick={prove}>0</div>
      </div>
    </>
  );
}

export default ElContador;
