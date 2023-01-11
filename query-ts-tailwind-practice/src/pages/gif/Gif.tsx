import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { useState } from "react"
import { Loading } from "../../components"
import { getRandomGif } from "../../services"

export interface GifComponent {}

const Gif:React.FC<GifComponent> = ():JSX.Element => {
  const [revalidate, setRevalidate] = useState<boolean>(false)
  const {data , error, isLoading }:UseQueryResult<AxiosResponse<any, any>> = useQuery({
    queryKey: ['randomGif', revalidate],
    queryFn: getRandomGif,
    refetchOnWindowFocus: false
  })
  if(isLoading) return <div className='w-full h-screen grid place-items-center'><Loading /></div>
  if(error) return <h1>Error while fetching...</h1>
  return (
    <>
      <main className='w-full h-screen flex flex-col justify-center items-center gap-4 bg-[#0F172A]'>
        <h1 className='text-slate-100 text-2xl'>Generar gif Random</h1>
        <section className="w-2/5 h-4/5 flex flex-col items-center justify-evenly rounded-2xl bg-[#1C2A50] shadow-xl">
          <iframe src={data?.data.data.embed_url} width={`${data?.data.data.images.original.width}`} height={`${data?.data.data.images.original.height}`} frameBorder="0" allowFullScreen></iframe>
          <button onClick={()=>setRevalidate(!revalidate)} className='h-9 w-fit px-2 bg-sky-900 text-slate-200 rounded-lg transition-all duration-700 ease-out hover:shadow-lg hover:shadow-sky-400 hover:-translate-y-2'> Random gif</button>
        </section>
      </main>
    </>
  )
}

export default Gif