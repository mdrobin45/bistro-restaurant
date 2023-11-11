import Cover from "../../Components/Cover/Cover";
import Category1 from "../../Containers/OurMenuPageContainer/Category1/Category1";
import Category2 from "../../Containers/OurMenuPageContainer/Category2/Category2";
import Category3 from "../../Containers/OurMenuPageContainer/Category3/Category3";
import TodayOffer from "../../Containers/OurMenuPageContainer/TodayOffer/TodayOffer";
import image from ".././../assets/menu/banner3.jpg";
const OurMenu = () => {
   return (
      <div>
         <section className="2xl:max-w-[1200px] mx-auto">
            <Cover
               title="Our Menu"
               description="Would you like to try a dish?"
               bgImage={image}
            />
         </section>
         <TodayOffer />
         <Category1 />
         <Category2 />
         <Category3 />
      </div>
   );
};

export default OurMenu;
