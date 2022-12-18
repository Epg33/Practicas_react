/*
refreshInterval
dedupingInterval
revalidateOnFocus
RevalidateOnReconnect
refreshWhenOffline
*/
import axios from "axios"
import useSWR from 'swr'

const PruebaSwr = () => {
  const {data, error} = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=1",
    async(url) => {
      const response = await axios(url);
      return response;
    }
  )
  
  console.log(data);

  if(error) return <div>failed to load</div>
  if(!data) return <div>Loading...</div>
  return (
    <>
      <main style={{paddingLeft: '15px',display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px'}}>
      {
        data.data.results.map(movie => {
          return <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img style={{width: '30%', height: 'auto'}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt='movie cover' />
            <span>rate: {movie.vote_average}</span>
          </div>
        })
      }
      </main>
    </>
  )
}

export default PruebaSwr