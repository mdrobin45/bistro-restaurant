import { useQuery } from "@tanstack/react-query";
import { getCartProduct } from "../Api/serverRequest";
import useAuth from "./useAuth";

const useCartProducts = () => {
   const { user } = useAuth();

   const { refetch, data: cartProducts = [] } = useQuery({
      queryKey: ["cartProducts", user],
      queryFn: () => getCartProduct(user?.email),
   });

   return { cartProducts, refetch };
};

export default useCartProducts;
