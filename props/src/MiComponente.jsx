import React from "react";

function MiComponente({ rey }, setPagar) {
  const route = "http://www.html6.es/img/";
  const imagen = `${route}${rey.nombre.toLowerCase()}.png`;

  const comprar = () => {
    setPagar((e) => e + rey.precio);
  };
  return (
    <div className="rey" style={{ backgroundColor: rey.color }}>
      <h3>{rey.nombre}</h3>
      <img src={imagen}></img>
      <p>Pagar:</p>
      <p>${rey.precio}</p>
      <button onClick={comprar}>Comprar</button>
    </div>
  );
}

export default MiComponente;
