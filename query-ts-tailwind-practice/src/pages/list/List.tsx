import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Key } from "react";
import { getList } from "../../services";
import { ListItem } from "../../types";

export interface ListComponent {}

const List: React.FC<ListComponent> = (): JSX.Element => {
  const { isLoading, error, data }: UseQueryResult<AxiosResponse<any, any>> =
    useQuery({
      queryKey: ["list"],
      queryFn: getList,
    });

  if (isLoading) { return <h1>Loading... {isLoading}</h1>; }
  if (error) { return <div>Error, could´nt query</div>; }
  return (
    <>
      <section className="grid grid-cols-3 place-items-center">
        {data?.data.map((pic:ListItem, index:Key ) => {
          return <img key={index} src={`https://picsum.photos/id/${pic.id}/400/250`} />;
        })}
      </section>
    </>
  );
};

export default List;
