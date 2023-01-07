import { useInfiniteQuery, UseInfiniteQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Key, useState } from "react";
import { Loading } from "../../components";
import { getList } from "../../services";
import { ListItem } from "../../types";

export interface ListComponent {}

const List: React.FC<ListComponent> = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const { data, error, fetchNextPage, hasNextPage, status }: UseInfiniteQueryResult<AxiosResponse<any, any>> =
    useInfiniteQuery({
      queryKey: ["list"],
      queryFn: getList,
      getNextPageParam: (lastPage, pages) => lastPage.next,
    });

  if (status==='loading') { return <div className="w-full h-64 grid place-content-center"><Loading /></div> }
  if (error) { return <div>Error, could´nt query</div>; }
  return (
    <>
      <section className="grid grid-cols-3 place-items-center">
        {data?.pages.map( (item:(any | AxiosResponse<any, any>)) => {
          return item.res.data.map((pic:ListItem, index:Key ) => {
            return <img key={index} src={`https://picsum.photos/id/${pic.id}/400/250`} alt={`picture taked by ${pic.author}`}/>;
          })
        })}
      </section>
      <div className="w-full flex justify-center">
        <button onClick={()=> {fetchNextPage()}}>Ver mas</button>
      </div>
    </>
  );
};

export default List;
