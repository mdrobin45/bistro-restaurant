import { useQuery } from "@tanstack/react-query";
import { getMenuItemByCategory } from "../Api/serverRequest";

const useCategoryMenuItems = (category) => {
   const { isPending, data } = useQuery({
      queryKey: ["categoryMenuItems"],
      queryFn: () => getMenuItemByCategory(category),
      initialData: [],
   });

   return { isPending, data };
};

export default useCategoryMenuItems;
