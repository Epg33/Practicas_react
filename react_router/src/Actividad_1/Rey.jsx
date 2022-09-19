import React from "react";
import Atanagildo from "./images/rey_atanagildo.png";
import Ataulfo from "./images/rey_ataulfo.png";
import Ervigio from "./images/rey_ervigio.png";
import Leogivildo from "./images/rey_leogivildo.png";
import Recisvinto from "./images/rey_recisvinto.png";
import Sisebuto from "./images/rey_sisebuto.png";
import { useParams } from "react-router-dom";

function Rey() {
  const datos = [
    {
      nombre: "Atanagildo",
      imagen: Atanagildo,
    },
    {
      nombre: "Ataulfo",
      imagen: Ataulfo,
    },
    {
      nombre: "Ervigio",
      imagen: Ervigio,
    },
    {
      nombre: "Leogivildo",
      imagen: Leogivildo,
    },
    {
      nombre: "Recisvinto",
      imagen: Recisvinto,
    },
    {
      nombre: "Sisebuto",
      imagen: Sisebuto,
    },
  ];
  const data = useParams();
  return (
    <div key={data.nombre} className="rey">      
      <p>{data.nombre}</p>
      <div>{datos.filter(name => name.nombre === data.nombre).map(names=> {
        return <img key={names.nombre} alt={`visualization of ${names.nombre}`} src={names.imagen} />
      }) 
      }</div>
    </div>
  );
}

export default Rey;
