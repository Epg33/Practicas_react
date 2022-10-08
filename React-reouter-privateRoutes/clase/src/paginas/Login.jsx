import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";

function Login() {
  const {logearme} = useContext(Contexto)
  const navegacion = useNavigate();
  const login = () => {
    navegacion("/", { replace: true });
    logearme();
  };
  return (
    <>
      <h1>Pantalla de login</h1>
      <button onClick={login}>login</button>
    </>
  );
}

export default Login;
