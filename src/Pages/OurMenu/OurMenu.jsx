import Cover from "../../Components/Cover/Cover";
import Category1 from "../../Containers/OurMenu/Category1/Category1";
import Category2 from "../../Containers/OurMenu/Category2/Category2";
import Category3 from "../../Containers/OurMenu/Category3/Category3";
import TodayOffer from "../../Containers/OurMenu/TodayOffer/TodayOffer";
import image from ".././../assets/menu/banner3.jpg";
const OurMenu = () => {
   return (
      <div>
         <Cover
            title="Our Menu"
            description="Would you like to try a dish?"
            bgImage={image}
         />
         <TodayOffer />
         <Category1 />
         <Category2 />
         <Category3 />
      </div>
   );
};

export default OurMenu;
