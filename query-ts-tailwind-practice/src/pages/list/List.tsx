import { useQuery } from "@tanstack/react-query";
import { getList } from "../../services";

export interface ListComponent {}

const List: React.FC<ListComponent> = ():JSX.Element => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['list'],
    queryFn: getList
  });

  if(isLoading) {return <h1>Loading... {isLoading}</h1>}
  if(error) {return <div>Error, could´nt query</div> }
  return (
    <>
      {
        data?.data.data.map((pic)=>{
          return <img src={pic.bitly_url}/>
        })
      }
    </>
  );
};

export default List;
