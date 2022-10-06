import React, { useReducer, useState } from 'react'

const types = {
  menos: 'menos',
  mas: 'mas',
  eliminar: 'eliminar',
  comprar: 'comprar'
}


function CompraB() {
  const valorInicial = [{id:1, nombre: 'Agua', cantidad: 3}, {id:2, nombre: 'Pan', cantidad: 2}]
  const reducer = (state, action)=> {
    switch(action.type){
      case types.menos:
        return state.map(cosa=>{
          return (action.payload === cosa.id && cosa.cantidad>1)?
          {...cosa, cantidad:cosa.cantidad-1}
          : cosa 
        })
      case types.mas:
        return state.map(cosa=>{
          return (action.payload===cosa.id)?
          {...cosa, cantidad: cosa.cantidad+1}
          :cosa
        })
      case types.eliminar:
        return state.filter(valor => valor.id !== action.payload )
    }
    return state;
  }
  const [lista, dispatch] = useReducer(reducer, valorInicial)
  const [miProducto, setmiProducto] = useState('');
  return (
    <>
      <label htmlFor='producto'>Producto: </label>
      <input id='producto' value={miProducto} onChange={(e)=> setmiProducto(e.target.value)}/>
      <button>Añadir</button>
      {
        lista.map((producto=>{
          return <div key={producto.id}>
              {producto.nombre} (unidades: {producto.cantidad})
              <button onClick={()=>dispatch({type: types.menos, payload: producto.id})}>-</button>
              <button onClick={()=>dispatch({type: types.mas, payload: producto.id})}>+</button>
              <button onClick={()=>dispatch({type: types.eliminar, payload: producto.id})}>X</button>
          </div>
        }))
      }
    </>
  )
}

export default CompraB