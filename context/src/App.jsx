import React from "react";
import "./App.css";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";
import Colores from "./Colores";
import { Datos } from "./Contexto/Contexto";
import Banderas from "./Components/Banderas";
import Info from "./Components/Info";
import { Data } from "./Contexto/Context_Act";

function App() {
  return (
    <>
      <div className="Clase">
        <Datos>
          <div className="App">
            <Pagina1 />
            <Pagina2 />
            <Pagina3 />
          </div>
          <Colores />
        </Datos>
      </div>
      <Data>
        <Banderas />
        <Info />
      </Data>
    </>
  );
}

export default App;
