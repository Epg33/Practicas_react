import React, {useState} from 'react'
import './App.css';

const App = () => {
 const cambios =[
  {moneda: 'Euro', cambio: 1},
  {moneda: 'Peso argentino', cambio: 118.6}, 
  {moneda:'Peso colombiano', cambio: 4543.5}, 
  {moneda: 'Peso mexicano', cambio: 23.2}, 
  {moneda: 'Dolar', cambio: 1.14}]

  const [euros, seteuros]=useState(0)
  

  const convertir=()=>{
  seteuros(document.getElementById('u0').value)
  }
  
  return (
    <div className='caja'>
      <label htmlFor='u0'>{cambios[0].moneda}</label>
      <input id='u0' type="number" onChange={convertir}/>
      <label htmlFor='u1'>{cambios[1].moneda}</label>
      <input id='u1' type="number" value={euros*cambios[1].cambio} readOnly/>
      <label htmlFor='u2'>{cambios[2].moneda}</label>
      <input id='u2' type="number" value={euros*cambios[2].cambio} readOnly/>
      <label htmlFor='u3'>{cambios[3].moneda}</label>
      <input id='u3' type="number" value={euros*cambios[3].cambio} readOnly/>
      <label htmlFor='u4'>{cambios[4].moneda}</label>
      <input id='u4' type="number" value={euros*cambios[4].cambio} readOnly/>
    </div>    
  )
}

export default App;
