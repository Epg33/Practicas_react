import React, { useReducer } from "react";
import Contexto from "./Contexto";
import miReducer from "./miReducer";

const init = () => {
  const valor = localStorage.getItem('estado')
  return {
    estado: !!valor
  }
}

const Provider = ({children}) => {
  const logearme = () => {

  }
  const desloguearme = () =>{

  }
  const [logeado, dispatch] = useReducer(miReducer, {}, init)
  return (
    <Contexto.Provider value={{...logeado, logearme, desloguearme}}>
      {children}
    </Contexto.Provider>
  );
};

export default Provider;
