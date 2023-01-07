import { useQuery, UseQueryResult } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react'
import { Loading } from '../../components'
import { getRandomImage } from '../../services';

export interface RandomComponent {}

const Random:React.FC<RandomComponent> = ():JSX.Element => {
  const [id, setId] = useState<number>(1)
  const {data, error, isLoading}:UseQueryResult<any> = useQuery({
    queryKey: ['rand', id],
    queryFn: ()=> getRandomImage(id)
  })
  const gray = useRef<HTMLInputElement>(null);
  const blur = useRef<HTMLInputElement>(null)
  const index:number = id.toString().length>3 ? 29 : 28
  const generateRandomNumber = ():void => {
    const number:number = Math.floor(Math.random()*(1084 + 1)) 
    setId(number===934 ? 1 : number);
  }

  if(isLoading) return <div className='w-full h-60 grid place-content-center'><Loading /></div>
  if(error) return <h1>Error while fetching</h1>

  return (
    <div>
      <img src={`${(data?.data.download_url as string).split('').splice(0, index).join('')}/500/400`} alt="random image from lorem pictum" />
      <label htmlFor="gray">Escala de grises</label><input type="checkbox" ref={gray} name="gray" id="" />
      <label htmlFor="blur">Aplicar blur</label><input type="checkbox" ref={blur} name="blur" id="" />
      <button onClick={()=>{generateRandomNumber()}}>Generar imagen aleatoria</button>
    </div>
  )
}

export default Random