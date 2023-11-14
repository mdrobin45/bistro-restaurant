import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addToCart } from "../Api/serverRequest";
import { showToast } from "../Utils/toast";
import useAuth from "./useAuth";
import useCartProducts from "./useCartProducts";

const useAddToCart = () => {
   const { user } = useAuth();
   const [id, setId] = useState(null);
   const { refetch } = useCartProducts();

   // Cart data object
   const productData = {
      userEmail: user?.email,
      quantity: 1,
      product: id,
   };
   // post to server with query
   const { isPending, mutate } = useMutation({
      mutationKey: ["addProductToCart"],
      mutationFn: () => addToCart(productData),
      onSuccess: (data) => {
         refetch();
         data.id && showToast("Added to cart", "success");
      },
      onError: (err) => {
         err.response.status === 409
            ? showToast("Already exist", "error")
            : showToast("Something went wrong", "error");
      },
   });

   // add to cart handler
   const addToCartHandler = (productId) => {
      setId(productId);
      if (user) {
         mutate();
      } else {
         showToast("Please login first!", "error");
      }
   };
   return { addToCartHandler, isPending };
};

export default useAddToCart;
