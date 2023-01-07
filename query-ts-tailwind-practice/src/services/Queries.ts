import axios, { AxiosResponse } from "axios";

type Response = {
  res: AxiosResponse<any, any>;
  next: number;
};

export const getList = async ({ pageParam = 1 }): Promise<Response> => {
  const res = await axios.get(
    `https://picsum.photos/v2/list?page=${pageParam}&limit=30`
  );
  return {
    res: res,
    next: pageParam + 1,
  };
};