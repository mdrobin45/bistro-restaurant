import About from "../../Containers/Home/About/About";
import Banner from "../../Containers/Home/Banner/Banner";
import CallToAction from "../../Containers/Home/CallToAction/CallToAction";
import MenuBanner from "../../Containers/Home/MenuBanner/MenuBanner";
import OnlineOrder from "../../Containers/Home/OnlineOrder/OnlineOrder";
import OurMenu from "../../Containers/Home/OurMenu/OurMenu";
import RecommendFoods from "../../Containers/Home/RecommendFoods/RecommendFoods";

const Home = () => {
   return (
      <div>
         <section className="2xl:max-w-[1200px] mx-auto">
            <Banner />
         </section>
         <section className="max-w-[1200px] mx-auto">
            <OnlineOrder />
         </section>
         <section className="2xl:max-w-[1200px] mx-auto">
            <About />
         </section>
         <section className="max-w-[1200px] mx-auto">
            <OurMenu />
         </section>
         <section className="max-w-[1200px] mx-auto">
            <CallToAction />
         </section>
         <section className="max-w-[1200px] mx-auto">
            <RecommendFoods />
         </section>
         <section className="2xl:max-w-[1200px] mx-auto">
            <MenuBanner />
         </section>
      </div>
   );
};

export default Home;
