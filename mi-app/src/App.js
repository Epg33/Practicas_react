import "./App.css";
import "./micss.css";
import imagen0 from "./imagenes/rey_atanagildo.png";
import imagen1 from "./imagenes/rey_leogivildo.png";
import imagen2 from "./imagenes/rey_sisebuto.png";
import imagen3 from "./imagenes/rey_incognito.png";

function App() {
  let nombres = ["Atanagildo", "Leogivildo", "Sisebuto"];
  function cambiar(e) {
    if (e.target.src.includes("incognito")) {
      e.target.style.visibility = "hidden";
    } else {
      e.target.src = imagen3;
    }
    e.target.parentNode.style.backgroundColor = "white";
    e.target.parentNode.style.border = "none";
  }
  function texto(k) {
    if (k.target.innerHTML == "visto") {
      k.target.innerHTML = "";
    } else {
      k.target.innerHTML = "visto";
    }
  }
  return (
    <div className="contenedor">
      <div className="caja">
        <img src={imagen0} onClick={cambiar} />
        <div className="nombre" onClick={texto}>
          {nombres[0]}
        </div>
      </div>
      <div className="caja">
        <img src={imagen1} onClick={cambiar} />
        <div className="nombre" onClick={texto}>
          {nombres[1]}
        </div>
      </div>
      <div className="caja">
        <img src={imagen2} onClick={cambiar} />
        <div className="nombre" onClick={texto}>
          {nombres[2]}
        </div>
      </div>
    </div>
  );
}

export default App;
