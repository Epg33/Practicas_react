import imagen0 from "./imagenes/rey_atanagildo.png";
import imagen1 from "./imagenes/rey_sisebuto.png";
//sirve para referenciar algo
import { useRef } from "react";
import "./App.css";

function App() {
  const cambio = 23.16;
  const refCaja = useRef();
  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML > 9) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "white";
    }
  };
  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };
  const cambia = (j) => {
    if (j.target.src.includes("atanagildo")) {
      j.target.src = imagen1;
    } else if (j.target.src.includes("sisebuto")) {
      j.target.src = imagen0;
    }
  };
  const lectura = (k) => {
    refCaja.current.innerHTML = k.target.value;
  };
  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambia} src={imagen0} />
      </div>
      <input onChange={lectura} className="campo" />
    </>
  );
}

export default App;
