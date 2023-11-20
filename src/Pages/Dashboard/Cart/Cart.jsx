import useCartProducts from "../../../Hooks/useCartProducts";
import ProductItem from "./ProductItem";
import SubTotal from "./SubTotal";

const Cart = () => {
   const { cartProducts } = useCartProducts();
   return (
      <div className="flex items-start justify-between gap-6">
         <div className="flex w-3/5 h-full flex-col bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
               <div className="mt-8">
                  <div className="flow-root">
                     <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartProducts.map((product) => (
                           <ProductItem
                              key={product._id}
                              productData={product}
                           />
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <SubTotal cartProducts={cartProducts} />
      </div>
   );
};

export default Cart;
