const SubTotal = ({ cartProducts }) => {
   const totalProduct = cartProducts.length;
   const totalPrice = cartProducts.reduce(
      (accumulator, currentProduct) =>
         accumulator + parseFloat(currentProduct.product.price),
      0
   );
   return (
      <div className="w-2/5 bg-white shadow-md rounded-md border sticky top-4">
         <div className="p-6">
            <h2 className="text-md font-semibold text-gray-900">
               PRICE DETAILS
            </h2>
         </div>
         <hr />
         <div>
            <div className=" overflow-x-auto pb-4">
               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                     <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Price ({totalProduct} items)
                        </th>
                        <td className="px-6 py-4 text-right">
                           ${totalPrice.toFixed(2)}
                        </td>
                     </tr>
                     <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Discount
                        </th>
                        <td className="px-6 py-4 text-right"> - $50</td>
                     </tr>
                     <tr className="bg-white border-b border-dashed dark:bg-gray-800">
                        <th
                           scope="row"
                           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Delivery Charges
                        </th>
                        <td className="px-6 py-4 text-right">$50</td>
                     </tr>
                     <tr className="bg-white border-b border-dashed dark:bg-gray-800">
                        <th
                           scope="row"
                           className="px-6 py-4 font-normal  whitespace-nowrap dark:text-white">
                           <span className="text-xl block font-bold text-gray-900">
                              {" "}
                              Total Amount
                           </span>
                           <span>including VAT</span>
                        </th>
                        <td className="px-6 text-xl font-bold text-gray-900 py-4 text-right">
                           ${totalPrice}
                        </td>
                     </tr>
                  </tbody>
               </table>
               <div>
                  <a className="flex mx-3 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                     Checkout
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SubTotal;
