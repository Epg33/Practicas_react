import { useQuery } from "@tanstack/react-query"
import { Loading } from "../../components"
import { getRandomGif } from "../../services"

export interface GifComponent {}

const Gif:React.FC<GifComponent> = ():JSX.Element => {
  const {data:gif , error, isLoading } = useQuery({
    queryKey: ['randomGif'],
    queryFn: getRandomGif
  })
  if(isLoading) return <div className='w-full h-screen grid place-items-center'><Loading /></div>
  if(error) return <h1>Error while fetching...</h1>
  return (
    <>
      <iframe src={gif?.data.data.embed_url} width={`${gif?.data.data.images.original.width}`} height={`${gif?.data.data.images.original.height}`} frameBorder="0" allowFullScreen></iframe>
    </>
  )
}

export default Gif