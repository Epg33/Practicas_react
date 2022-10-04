import React, { useReducer } from "react";

const currentTime = new Date();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();
const valorInicial = { m: month, a: year };
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",
];

const reducer = (state, action) => {
  let newMonth = state.m;
  let newYear = state.a;
  switch(action.type){
    case "masM":
      newMonth=newMonth===11? 0 : newMonth+1;
      break;
    case "menosM":
      newMonth=newMonth===0? 11 : newMonth-1;
      break;   
    case "masA":
      newYear=newYear+1;
      break;  
    case "menosA":
      newYear= newYear-1;
      break 
  }
  return {m: newMonth, a: newYear}    
};

function Calendario() {
  const [fecha, dispatch] = useReducer(reducer, valorInicial);
  return (
    <>
      {meses[fecha.m]} ({fecha.a})
      <div>
        Meses: <button onClick={()=>dispatch({type: "masM"})}>+</button>
        <button onClick={()=>dispatch({type: "menosM"})}>-</button>
      </div>
      <div>
        Años: <button onClick={()=>dispatch({type: "masA"})}>+</button>
        <button onClick={()=>dispatch({type: "menosA"})}>-</button>
      </div>
    </>
  );
}

export default Calendario;
