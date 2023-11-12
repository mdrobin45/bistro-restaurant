import Cover from "../../Components/Cover/Cover";
import image from "../../assets/shop/banner2.jpg";
import CategoryTab from "./CategoryTab";

const ShopContainers = () => {
   return (
      <div>
         <Cover
            title="OUR SHOP"
            description="Would you like to try a dish?"
            bgImage={image}
         />
         <CategoryTab />
      </div>
   );
};

export default ShopContainers;
