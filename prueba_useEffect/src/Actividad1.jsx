import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [chiste, setChiste] = useState("");
  const otro = ()=> {
    const url = "http://api.icndb.com/jokes/random";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => setChiste(lectura.value.joke))
      .catch(() => console.log);
  }

  useEffect(() => {
    otro()
  }, []);

  return (
    <>
      <h2>{chiste}</h2>
      <p></p>
      <button onClick={otro}>Un chiste</button>
    </>
  );
}

export default App;
