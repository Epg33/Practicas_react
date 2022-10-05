// se debe poder añadir el producto, este debe tener una cantidad de unidades que puede aumentar 
// o decrementar y eliminar el producto con los botones que este tenga, ademas se debe agregar 
// cualquier producto que se ingrse a traves del input, el cual debe quedar libre luego de agregar
// un producto
import Producto from './Producto';
import React, {useReducer, useState, useRef} from 'react'

const types = {
  agregar: "agregar",
  sumar: "sumar",
  restar: "restar",
  eliminar: "eliminar"
}

const initValue = [''];


function Compra() {
  // const cleanInput = () =>{
  //   product.current.value = '';
  // }

  let newState = []
  const reducer = (state, action) => {
    switch(action.type){
      case types.agregar: newState.push(
        // <div key={Math.round(Math.random()*1e15)}>
        //   <h4>{product.current.value}</h4>
        //   <p>(unidades: {0})</p>
        //   <button onClick={0}>+</button>
        //   <button>-</button>
        //   <button onClick={()=>state.splice(action.payload-1, 1)}>X</button>
        // </div>
        <Producto key={Math.round(Math.random()*1e15)} props={{name: product.current.value, state,action}} />
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
      <button onClick={()=>{dispatch({type: types.agregar, payload: index}); setIndex(index+1)}}>Añadir</button>
      <div>
        {state}
      </div>
    </>
  )
}

export default Compra