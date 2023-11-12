import { useQuery } from "@tanstack/react-query";
import { getAllMenuItems } from "../Api/serverRequest";

const useAllMenuItems = () => {
   const { isPending, data } = useQuery({
      queryKey: ["allMenuItems"],
      queryFn: getAllMenuItems,
      initialData: [],
   });
   return { isPending, data };
};

export default useAllMenuItems;
