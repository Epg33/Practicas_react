// se debe poder añadir el producto, este debe tener una cantidad de unidades que puede aumentar 
// o decrementar y eliminar el producto con los botones que este tenga, ademas se debe agregar 
// cualquier producto que se ingrse a traves del input, el cual debe quedar libre luego de agregar
// un producto

import React, {useReducer, useState, useRef} from 'react'

function Compra() {

  return (
    <>
      <label htmlFor='search-product'>Producto: </label>
      <input type='text' />
      <button>Añadir</button>
      <div>

      </div>
    </>
  )
}

export default Compra