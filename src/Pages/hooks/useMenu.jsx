import {useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = ()=>{
    const Axiospublic = useAxiosPublic()
    const{data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
         const res = await Axiospublic.get('/menu')
            return res.data;
        }
    })
    return [menu, loading, refetch];
}
export default useMenu;

/**
 *  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })
*/