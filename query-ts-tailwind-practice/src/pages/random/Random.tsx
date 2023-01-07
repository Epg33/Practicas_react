import { useQuery, UseQueryResult } from '@tanstack/react-query';
import React, { useRef, useState } from 'react'
import { Loading } from '../../components'
import { getRandomImage } from '../../services';

export interface RandomComponent {}

const Random:React.FC<RandomComponent> = ():JSX.Element => {
  const wrongIds = [934, 601, 262, 754, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 706, 707, 708, 709, 710, 711, 712, 713, 714]

  const [id, setId] = useState<number>(1)
  const {data, error, isLoading}:UseQueryResult<any> = useQuery({
    queryKey: ['rand', id],
    queryFn: ()=> getRandomImage(id)
  })
  const index:number = id.toString().length===4 ? 29 : id.toString().length===3 ? 28 : id.toString().length===2 ? 27 : 26
  const [imageUrl, setImageUrl] = useState<string>('')
  const gray = useRef<HTMLInputElement>(null);
  const blur = useRef<HTMLInputElement>(null)
  const generateRandomNumber = ():void => {
    const number:number = Math.floor(Math.random()*(1084 + 1)) 
    setId(wrongIds.includes(number) ? 1 : number);
  }

  const handleChange = () => {
    if(gray.current?.checked && Number(blur.current?.value) > 0){
      setImageUrl(`?grayscale&blur${blur.current?.value}`)
    }
    else if(gray.current?.checked) {
      setImageUrl('?grayscale')
    }
    else if (Number(blur.current?.value) > 0) {
      setImageUrl(`?blur=${blur.current?.value}`)
    }
    else {
      setImageUrl('')
    }
  }

  if(isLoading) return <div className='w-full h-60 grid place-content-center'><Loading /></div>
  if(error) return <h1>Error while fetching</h1>
  return (
    <div>
      <img src={data?.data.download_url+imageUrl} alt="random image from lorem pictum" />
      <label htmlFor="gray">Escala de grises</label><input type="checkbox" checked={imageUrl.includes('?grayscale')} onChange={()=>!imageUrl ?  setImageUrl('?grayscale') : setImageUrl(`?blur=${blur.current?.value}`)} ref={gray} name="gray" id="" />
      <label htmlFor="blur">Aplicar blur</label><input type="number" ref={blur} min='0' max='10'  name="blur" id="" />
      <button onClick={handleChange}>Aplicar blur</button>
      <button onClick={()=>{generateRandomNumber()}}>Generar imagen aleatoria</button>
    </div>
  )
}

export default Random