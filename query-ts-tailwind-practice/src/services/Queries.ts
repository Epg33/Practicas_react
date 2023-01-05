import axios from "axios"

export const getList = async () => {
  const data = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=VheOOBBewWsnwHzrfrAbrhAxU46QeNLW&q=cats&limit=20&offset=0&rating=g&lang=en')
  console.log(data);
  return data;
}