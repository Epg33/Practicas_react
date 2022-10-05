import React from 'react'

function Producto({name, state,action}) {
  return (
    <div key={Math.round(Math.random()*1e15)}>
          <h4>{name}</h4>
          <p>(unidades: {0})</p>
          <button onClick={0}>+</button>
          <button>-</button>
          <button onClick={()=>state.splice(action.payload-1, 1)}>X</button>
        </div>
  )
}

export default Producto