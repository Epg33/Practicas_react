import axios, { Axios, AxiosResponse } from "axios"

export const getList = async (page:Number):Promise<AxiosResponse<any, any>> => {
  try{
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=30`)
    console.log(res);
    return res;
  }
  catch(err:any){
    console.log(err)
    return err
  }
}