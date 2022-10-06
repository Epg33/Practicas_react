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

const initValue = [];


function Compra() {
  // const cleanInput = () =>{
  //   product.current.value = '';
  // }

  let newState = []
  const reducer =  (state, action) => {
    switch(action.type){
      case types.agregar: newState.push(
        <div key={Math.round(Math.random()*1e15)}>
          <h4>{product.current.value}</h4>
          <p>(unidades: {action.number})</p>
          <button onClick={()=>alert('nose')}>+</button>
          <button onClick={()=>action.number = action.number-1}>-</button>
          <button onClick={()=>{state.splice(action.payload, 1); console.log(newState)}}>X</button>
        </div>
        )
        console.log(index);   
    }
    return [...state, newState]
  }
  const [index, setIndex] = useState(0);
  const product = useRef()
  const [state, dispatch] = useReducer(reducer, initValue)
  return (
    <>
      <label htmlFor='search-product'>Producto: </label>
      <input type='text' ref={product}/>
      <button onClick={()=>{dispatch({type: types.agregar, number: 0,  payload: index}); setIndex(index+1)}}>Añadir</button>
      <div>
        {state}
      </div>
    </>
  )
}

export default Compra