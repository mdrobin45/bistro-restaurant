const MenuItem = ({ recipe, name, price, image }) => {
   return (
      <div className="flex items-start gap-3">
         <div className="w-28 h-24">
            <img
               className="bg-gray-200 w-full h-full rounded-b-full rounded-r-full"
               src={image}
               alt="Item"
            />
         </div>
         <div className="flex items-start justify-between">
            <div>
               <h2 className="text-xl font-light pb-3">{name} -----------</h2>
               <p className="text-text w-11/12">{recipe}</p>
            </div>
            <div>
               <p className="text-xl text-primary">${price}</p>
            </div>
         </div>
      </div>
   );
};

export default MenuItem;
