import image from "../../assets/menu/menuItem.png";

const MenuItem = ({ description, title }) => {
   return (
      <div className="flex items-start gap-3">
         <div>
            <img
               className="bg-gray-200 w-36 h-28 rounded-b-full rounded-r-full"
               src={image}
               alt="Item"
            />
         </div>
         <div className="flex items-start justify-between">
            <div>
               <h2 className="text-xl font-light pb-3">{title} -----------</h2>
               <p className="text-text w-11/12">{description}</p>
            </div>
            <div>
               <p className="text-xl text-primary">$14.5</p>
            </div>
         </div>
      </div>
   );
};

export default MenuItem;
