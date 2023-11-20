import { useMutation } from "@tanstack/react-query";
import { deleteCartProduct } from "../../../Api/serverRequest";
import useCartProducts from "../../../Hooks/useCartProducts";
import { showToast } from "../../../Utils/toast";

const ProductItem = ({ productData }) => {
   const { refetch } = useCartProducts();
   const { _id, quantity, product } = productData;
   const { name, image, price, category } = product;

   // Server delete request
   const mutation = useMutation({
      mutationFn: (productId) => {
         return deleteCartProduct(productId);
      },
   });

   // Handle delete cart product
   const handleDelete = (id) => {
      mutation.mutate(id);
   };

   // Delete status
   if (mutation.isSuccess) {
      showToast("Product removed", "success");
      refetch();
   }
   return (
      <li className="flex py-6">
         <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
               src={image}
               alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
               className="h-full w-full object-cover object-center"
            />
         </div>

         <div className="ml-4 flex flex-1 flex-col">
            <div>
               <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                     <a href="#">{name}</a>
                  </h3>
                  <p className="ml-4">${price}</p>
               </div>
               <p className="mt-1 text-sm text-gray-500">{category}</p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
               <p className="text-gray-500">Qty {quantity}</p>

               <div className="flex">
                  <button
                     onClick={() => {
                        handleDelete(_id);
                     }}
                     type="button"
                     className="font-medium text-indigo-600 hover:text-indigo-500">
                     Remove
                  </button>
               </div>
            </div>
         </div>
      </li>
   );
};

export default ProductItem;
