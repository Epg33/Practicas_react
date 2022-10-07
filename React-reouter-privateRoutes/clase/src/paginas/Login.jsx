import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navegacion = useNavigate();
  const login = () => {
    navegacion("/", { replace: true });
  };
  return (
    <>
      <h1>Pantalla de login</h1>
      <button onClick={login}>login</button>
    </>
  );
}

export default Login;
