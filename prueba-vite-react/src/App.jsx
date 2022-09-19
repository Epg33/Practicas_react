import "./App.css";
import Nombres from "./Nombres";
import Reyes from "./Reyes";
import PorLaE from "./PorLaE";
import ElContador from "./ElContador";

function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 19,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataulfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leogivildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recisvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];
  return (
    <>
      <h2>Actividad 1:</h2>
      <div className="album">
        {reyes.map((value) => (
          <Reyes
            key={value.nombre}
            nombre={value.nombre}
            años={value.reinado}
            vacas={value.vacasComidas}
          />
        ))}
      </div>
      <h2>Actividad 2:</h2>
      <div className="nombres">
        {reyes
          .filter((value) => !value.nombre.includes("g"))
          .map((value) => (
            <Nombres key={value.nombre} nombre={value.nombre} />
          ))}
      </div>
      <h2>Actividad 3:</h2>
      <div className="laE">
        <PorLaE reyes={reyes} />
      </div>
      <h2>Actividad 4:</h2>
      <div>
        {reyes
          .filter((value) => value.vacasComidas > 10 && value.reinado > 10)
          .map((value) => (
            <ElContador nombre={value.nombre} key={value.nombre + "cont"} />
          ))}
      </div>
    </>
  );
}

export default App;
