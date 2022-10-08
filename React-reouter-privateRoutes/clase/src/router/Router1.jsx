import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../paginas/Login";
import Recuperacion from "../paginas/Recuperacion";
import Router2 from "./Router2";
import RutasPrivadas from "./RutasPrivadas";
import RutasPublicas from "./RutasPublicas";

const Router1 = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
            <RutasPublicas>
              <Login />
            </RutasPublicas>
          }
        ></Route>
        <Route path="recuperacion" element={
            <RutasPublicas>
              <Recuperacion />
            </RutasPublicas>
          }
        ></Route>
        <Route path="/*" element={
          <RutasPrivadas>
            <Router2 />
          </RutasPrivadas>
        }></Route>
      </Routes>
    </>
  );
};

export default Router1;
