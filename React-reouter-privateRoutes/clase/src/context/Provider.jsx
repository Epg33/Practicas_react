import React, { useReducer } from "react";
import Contexto from "./Contexto";
import miReducer from "./miReducer";
import types from "./types";

const init = () => {
  const valor = localStorage.getItem('estado')
  return {
    estado: !!valor
  }
}

const Provider = ({children}) => {
  const logearme = () => {
    const action = {
      types: types.login
    }
    localStorage.setItem('estado', true)
    dispatch(action)
  }
  const desloguearme = () =>{
    const action = {
      types: types.logout
    }
    localStorage.removeItem('estado')
    dispatch(action)
  }
  const [logeado, dispatch] = useReducer(miReducer, {}, init)
  return (
    <Contexto.Provider value={{...logeado, logearme, desloguearme}}>
      {children}
    </Contexto.Provider>
  );
};

export default Provider;
