import React, { useReducer } from "react";

const types = {
  masM:"masM", 
  menosM: "menosM",
  masA: "masA",
  menosA: "menosA"
}
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
    case types.masM:
      newMonth=newMonth===11? 0 : newMonth+1;
      break;
    case types.menosM:
      newMonth=newMonth===0? 11 : newMonth-1;
      break;   
    case types.masA:
      newYear=newYear+1;
      break;  
    case types.menosA:
      newYear= newYear-1;
      break 
  }
  return {m: newMonth, a: newYear}    
};

function Calendario() {
  const [fecha, dispatch] = useReducer(reducer, valorInicial);
  return (
    <>
      <div style={
        (fecha.m< month && fecha.a < year || fecha.a<year)?
        {color: "red"} : {color: "green"}}>
        {meses[fecha.m]} ({fecha.a})
      </div>
      <div>
        Meses: <button onClick={()=>dispatch({type: types.masM})}>+</button>
        <button onClick={()=>dispatch({type: types.menosM})}>-</button>
      </div>
      <div>
        Años: <button onClick={()=>dispatch({type: types.masA})}>+</button>
        <button onClick={()=>dispatch({type: types.menosA})}>-</button>
      </div>
    </>
  );
}

export default Calendario;
