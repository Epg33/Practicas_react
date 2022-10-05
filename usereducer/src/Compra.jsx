// se debe poder añadir el producto, este debe tener una cantidad de unidades que puede aumentar 
// o decrementar y eliminar el producto con los botones que este tenga, ademas se debe agregar 
// cualquier producto que se ingrse a traves del input, el cual debe quedar libre luego de agregar
// un producto

import React, {useReducer, useState, useRef} from 'react'

const types = {
  agregar: "agregar",
  sumar: "sumar",
  restar: "restar",
  eliminar: "eliminar"
}

const initValue = [''];


function Compra() {
  const cleanInput = () =>{
    product.current.textContent = '';
  }

  let newState = []
  const reducer = (state, action) => {
    
    switch(action.type){
      case types.agregar: newState.push(
        <div>
          <h4>{product.current.value}</h4>
          <p>(unidades: )</p>
          <button>+</button>
          <button>-</button>
          <button>X</button>
        </div>)
    }
    return [...state, newState]
  }
  
  const product = useRef()
  const [state, dispatch] = useReducer(reducer, initValue)
  return (
    <>
      <label htmlFor='search-product'>Producto: </label>
      <input type='text' ref={product}/>
      <button onClick={()=>dispatch({type: types.agregar})}>Añadir</button>
      <div>
        {state}
      </div>
    </>
  )
}

export default Compra