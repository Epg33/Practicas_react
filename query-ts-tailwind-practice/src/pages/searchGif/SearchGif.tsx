import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getSearchedGif } from "../../services";

export interface SearchGifComponent { }

const SearchGif:React.FC<SearchGifComponent> = ():JSX.Element => {
  const [query, setQuery] = useState<string>('cats');
  const {data, error, isLoading} = useQuery({
    queryKey: ['searchGif', query],
    queryFn: ()=> getSearchedGif(query)
  })

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>Error</h1>
  return (
    <>
      <h1>Search Gif</h1>
    </>
  )
}

export default SearchGif