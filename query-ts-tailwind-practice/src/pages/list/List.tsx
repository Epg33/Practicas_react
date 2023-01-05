import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Key, useState } from "react";
import { getList } from "../../services";
import { ListItem } from "../../types";

export interface ListComponent {}

const List: React.FC<ListComponent> = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const { isLoading, error, data }: UseQueryResult<AxiosResponse<any, any>> =
    useQuery({
      queryKey: ["list", page],
      queryFn: ()=> getList(page),
      refetchOnWindowFocus: false,
      keepPreviousData: true
    });

  if (isLoading) { return <h1>Loading... {isLoading}</h1>; }
  if (error) { return <div>Error, could´nt query</div>; }
  return (
    <>
      <section className="grid grid-cols-3 place-items-center">
        {data?.data.map((pic:ListItem, index:Key ) => {
          return <img key={index} src={`https://picsum.photos/id/${pic.id}/400/250`} alt={`picture taked by ${pic.author}`}/>;
        })}
      </section>
      <div className="w-screen flex justify-center">
        <button onClick={()=>setPage(page+1)}>Ver mas</button>
      </div>
    </>
  );
};

export default List;
