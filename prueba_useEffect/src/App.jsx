import React, { useState } from "react";
import { useEffect } from "react";
import Actividad1 from "./Actividad1";
import Actividad2 from "./Actividad2";
import "./App.css";

function App() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=3";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        lectura.results.map((person) => {
          setDatos((e) => [
            ...e,
            <div key={person.email}>
              <div>
                {person.name.first} {person.name.last}
              </div>
              <div>
                <img src={person.picture.large} />
              </div>
            </div>,
          ]);
        });
      })
      .catch(() =>
        console.log("lo mismo que piensan tus papás de ti, un error")
      );
  }, []);

  return (
    <>
      <h1>Premiados: </h1>
      {datos}
      <Actividad1 />
      <Actividad2 />
    </>
  );
}

export default App;