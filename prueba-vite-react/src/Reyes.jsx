function Reyes({ nombre, años, vacas }) {
  const lasVacas = años * 365 * vacas;
  const route = "http://www.html6.es/img/";
  const imagen = `${route}${nombre.toLowerCase()}.png`;
  return (
    <>
      <div className="carta">
        <p>
          <span>{nombre.toUpperCase()}</span> ha comido {lasVacas} vacas en sus{" "}
          {años} años de reinado
        </p>
        <img src={imagen} />
      </div>
    </>
  );
}

export default Reyes;
