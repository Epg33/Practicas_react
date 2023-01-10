import { useQuery, UseQueryResult } from '@tanstack/react-query';
import React, { useRef, useState } from 'react'
import { Loading } from '../../components'
import { getRandomImage } from '../../services';

export interface RandomComponent {}

const Random:React.FC<RandomComponent> = ():JSX.Element => {
  const wrongIds = [934, 601, 262, 754, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 706, 707, 708, 709, 710, 711, 712, 713, 714, 578]

  const [id, setId] = useState<number>(1)
  const {data, error, isLoading}:UseQueryResult<any> = useQuery({
    queryKey: ['rand', id],
    queryFn: ()=> getRandomImage(id)
  })
  const [imageUrl, setImageUrl] = useState<string>('')
  const gray = useRef<HTMLInputElement>(null);
  const blur = useRef<HTMLInputElement>(null)
  const generateRandomNumber = ():void => {
    const number:number = Math.floor(Math.random()*(1084 + 1)) 
    setId(wrongIds.includes(number) ? 1 : number);
  }

  const handleFilters = () => {
    const blurLevel:number = Number(blur.current?.value);
    const grayScale:boolean = gray.current!.checked;
    console.log(blurLevel > 0 && grayScale, grayScale);
    
    if(blurLevel > 0 && grayScale){
      setImageUrl(`?grayscale&blur=${blurLevel}`);
    } else if (blurLevel > 0) {
      setImageUrl(`?blur=${blurLevel}`);
    } else if (grayScale) {
      setImageUrl(`?grayscale`);
    } else {
      setImageUrl('');
    }
    console.log(imageUrl);
  }

  if(isLoading) return <div className='w-full h-60 grid place-content-center'><Loading /></div>
  if(error) return <h1>Error while fetching</h1>
  return (
    <main className='flex justify-around' >
      <section className='flex flex-col items-center w-3/4'>
        <img src={`${data?.data.download_url+imageUrl}`} className='w-3/4 h-auto' alt="random image from lorem pictum" />
        <button onClick={()=>{setImageUrl('');generateRandomNumber()}}>Generar imagen aleatoria</button>
      </section>
      <section className='w-1/4 flex flex-col items-start gap-3 bg-slate-800 text-slate-100 p-4'>
        <h2 className='text-xl'>Filtros</h2>
        <label htmlFor="gray">Escala de grises <input type="checkbox" ref={gray} name="gray" id="" /></label>
        <label htmlFor="blur">Blur <input type="number" ref={blur} min='0' max='10' placeholder='0' name="blur" className='text-slate-900'/></label>
        <button onClick={()=>handleFilters()}>Aplicar filtros</button>
      </section>
    </main>
  )
}

export default Random