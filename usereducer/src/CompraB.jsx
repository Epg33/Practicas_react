import React, { useReducer, useRef, useState } from 'react'

const types = {
  menos: 'menos',
  mas: 'mas',
  eliminar: 'eliminar',
  comprar: 'comprar'
}


function CompraB() {
  const valorInicial = []
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
      case types.comprar:
        return [...state, action.payload]

      default:
        return state;
    }
    return state;
  }
  const [lista, dispatch] = useReducer(reducer, valorInicial)
  const [miProducto, setmiProducto] = useState('');
  const inputName = useRef(null);
  return (
    <>
      <label htmlFor='producto'>Producto: </label>
      <input id='producto' ref={inputName} value={miProducto} onChange={(e)=> setmiProducto(e.target.value)}/>
      <button onClick={()=>
      { inputName.current.focus();
      setmiProducto('')
        dispatch({type: types.comprar, 
        payload: {id: Date.now(), nombre: miProducto, cantidad: 0} })}
        }>Añadir</button>
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