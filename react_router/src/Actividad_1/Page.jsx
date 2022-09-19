import React from "react";
import { Link } from "react-router-dom";
import Atanagildo from "./images/rey_atanagildo.png";
import Ataulfo from "./images/rey_ataulfo.png";
import Ervigio from "./images/rey_ervigio.png";
import Leogivildo from "./images/rey_leogivildo.png";
import Recisvinto from "./images/rey_recisvinto.png";
import Sisebuto from "./images/rey_sisebuto.png";

function Page() {
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
  return (
    <>
      <div className="Page">
        {datos.map((data) => {
          return (
            <Link className="link" to={`/rey/${data.nombre}`}>
              <img src={data.imagen} alt={`visualization of ${data.nombre}`} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Page;
