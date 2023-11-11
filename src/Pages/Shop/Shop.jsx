import Cover from "../../Components/Cover/Cover";
import image from "../../assets/shop/banner2.jpg";

const Shop = () => {
   return (
      <div>
         <Cover
            title="OUR SHOP"
            description="Would you like to try a dish?"
            bgImage={image}
         />
      </div>
   );
};

export default Shop;
