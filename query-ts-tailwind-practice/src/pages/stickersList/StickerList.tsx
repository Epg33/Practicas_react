import { useQuery } from "@tanstack/react-query"
import { getStickersList } from "../../services"

export interface StickerListComponent { }

const StickerList:React.FC<StickerListComponent> = ():JSX.Element => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['stickersList'],
    queryFn: ()=> getStickersList()
  })

  if(isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>
  return (
    <>
      <h1>Stickers List</h1>
    </>
  )
}

export default StickerList