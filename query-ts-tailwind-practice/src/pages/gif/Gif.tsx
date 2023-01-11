import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { Loading } from "../../components"
import { getRandomGif } from "../../services"

export interface GifComponent {}

const Gif:React.FC<GifComponent> = ():JSX.Element => {
  const [revalidate, setRevalidate] = useState<boolean>(false)
  const {data , error, isLoading } = useQuery({
    queryKey: ['randomGif', revalidate],
    queryFn: getRandomGif,
    refetchOnWindowFocus: false
  })
  if(isLoading) return <div className='w-full h-screen grid place-items-center'><Loading /></div>
  if(error) return <h1>Error while fetching...</h1>
  return (
    <>
      <iframe src={data?.data.data.embed_url} width={`${data?.data.data.images.original.width}`} height={`${data?.data.data.images.original.height}`} frameBorder="0" allowFullScreen></iframe>
      <button onClick={()=>setRevalidate(!revalidate)}>Random gif</button>
    </>
  )
}

export default Gif