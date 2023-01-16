import axios, { AxiosResponse } from "axios";

type Response = {
  res: AxiosResponse<any, any>;
  next: number;
};

export const getList = async ({ pageParam = 1 }): Promise<Response> => {
  const res: AxiosResponse<any, any> = await axios.get(
    `https://picsum.photos/v2/list?page=${pageParam}&limit=30`
  );
  return {
    res: res,
    next: pageParam + 1,
  };
};

export const getRandomImage = async (
  id: number
): Promise<AxiosResponse<any, any>> => {
  const res: AxiosResponse<any, any> = await axios.get(
    `https://picsum.photos/id/${id}/info`
  );
  return res;
};

export const getRandomGif = async (): Promise<AxiosResponse<any, any>> => {
  const res: AxiosResponse<any, any> = await axios.get(
    "https://api.giphy.com/v1/gifs/random?api_key=VheOOBBewWsnwHzrfrAbrhAxU46QeNLW&tag=&rating=g"
  );
  console.log(res.data.data.images.original);
  return res;
};

export const getStickersList = async ():Promise<AxiosResponse<any, any>> => {
  const res: AxiosResponse<any, any> = await axios.get(
    'https://api.giphy.com/v1/stickers/packs/3138?api_key=VheOOBBewWsnwHzrfrAbrhAxU46QeNLW'
  )
  console.log(res);
  return res;
}

export const getSearchedGif = async (query:string):Promise<AxiosResponse<any, any>> => {
  const res:AxiosResponse<any, any> = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=VheOOBBewWsnwHzrfrAbrhAxU46QeNLW&q=${query}&limit=20&offset=0&rating=g&lang=en`
  )
  console.log(res);
  return res;
}