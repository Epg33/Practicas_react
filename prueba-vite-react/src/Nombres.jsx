function Nombres({ nombre }) {
  const borrar = (e) => {
    e.target.parentNode.remove();
  };
  return (
    <>
      <div className="name" id={nombre}>
        <p>{nombre.toUpperCase()}</p>
        <button onClick={borrar}>Borrar</button>
      </div>
    </>
  );
}

export default Nombres;
