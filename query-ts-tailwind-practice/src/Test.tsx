import axios from 'axios'
import {useQuery} from '@tanstack/react-query'

export interface TestInterface {

}

const Test:React.FC<TestInterface> = () => {
  const testing = async () => {
    const test = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    console.log(test)
    const res = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=1')
      const rs= res.data.results;
      return rs;
  }
  const {isLoading, error, data} = useQuery({
    queryKey: ['test'],
    queryFn: testing
  })
  if(isLoading)return <h1>Loading...</h1>
  if (error) return <h1>error</h1>
  return (
    <>
    {/* <iframe src="https://giphy.com/embed/cfuL5gqFDreXxkWQ4o" width="480" height="480" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-cool-cats-cfuL5gqFDreXxkWQ4o"></a></p> */}
    <img src="https://picsum.photos/id/102/800/500" alt="" />
      {
        data.map((pic:any)=>{
          return <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${pic.profile_path}`} />
        })
      }
      <h1>xd</h1>
    </>
  )
}

export default Test