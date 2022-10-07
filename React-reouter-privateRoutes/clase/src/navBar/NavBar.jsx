import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const navegacion = useNavigate();
  const login = () => {
    navegacion('/login', {replace: true})
  }
  return (
    <>
      <nav>
        <NavLink to="contenido1">Contenido 1</NavLink>
        <NavLink to="contenido2">Contenido 2</NavLink>
        <NavLink to="contenido3">Contenido 3</NavLink>
        <button onClick={login}>Logout</button>
      </nav>
    </>
  );
}

export default NavBar;
