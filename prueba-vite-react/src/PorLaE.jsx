function PorLaE({ reyes }) {
  const resultado = reyes.find(
    (e) => e.nombre.substring(0, 1) == "e" || e.nombre.substring(0, 1) == "E"
  );

  return (
    <>{resultado == undefined ? "no se ha encontrado" : resultado.nombre}</>
  );
}

export default PorLaE;
