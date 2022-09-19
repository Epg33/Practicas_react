import MiComponente from "./MiComponente";
import { useState } from "react";
import "./App.css";

function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
    },
    {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169,
    },
    {
      nombre: "Ataulfo",
      color: "peru",
      precio: 81,
    },
    {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
    },
    {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141,
    },
    {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69,
    },
  ];
  const [pagar, setPagar] = useState(0);
  return (
    <>
      <h2>Total a pagar: {pagar}$</h2>
      <div className="reyes">
        <MiComponente rey={reyes[0]} setPagar={setPagar}/>
        <MiComponente rey={reyes[1]} setPagar={setPagar}/>
        <MiComponente rey={reyes[2]} setPagar={setPagar}/>
        <MiComponente rey={reyes[3]} setPagar={setPagar}/>
        <MiComponente rey={reyes[4]} setPagar={setPagar}/>
        <MiComponente rey={reyes[5]} setPagar={setPagar}/>
      </div>
    </>
  );
}

export default App;
