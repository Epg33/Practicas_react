import axios, { Axios, AxiosResponse } from "axios"

export const getList = async ():Promise<AxiosResponse<any, any>> => {
  const data = await axios.get('https://picsum.photos/v2/list?page=1&limit=30')
  console.log(data);
  return data;
}