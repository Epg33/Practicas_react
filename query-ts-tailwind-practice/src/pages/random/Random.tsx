import React, { useEffect, useState } from 'react'
import { Loading } from '../../components'

export interface RandomComponent {}

const Random:React.FC<RandomComponent> = ():JSX.Element => {
  const [id, setId] = useState<Number>()
  const generateRandomNumber = ():void => {
    const number:number = Math.floor(Math.random()*(1084+1))
    setId(number);
  }
  useEffect(()=>{
    generateRandomNumber();
  }, [])
  if(!id) return <div className='w-full h-60 grid place-content-center'><Loading></Loading></div>
  return (
    <div>
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="random image from lorem pictum" />
      <label htmlFor="gray">Escala de grises</label><input type="checkbox" name="gray" id="" />
      <label htmlFor="blur">Aplicar blur</label><input type="checkbox" name="blur" id="" />
      <button onClick={()=>generateRandomNumber()}>Generar imagen aleatoria</button>
    </div>
  )
}

export default Random