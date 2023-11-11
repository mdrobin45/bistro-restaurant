import About from "../../Containers/Home/About/About";
import Banner from "../../Containers/Home/Banner/Banner";
import CallToAction from "../../Containers/Home/CallToAction/CallToAction";
import MenuBanner from "../../Containers/Home/MenuBanner/MenuBanner";
import OnlineOrder from "../../Containers/Home/OnlineOrder/OnlineOrder";
import OurMenu from "../../Containers/Home/OurMenu/OurMenu";
import RecommendFoods from "../../Containers/Home/RecommendFoods/RecommendFoods";
import TestimonialSlider from "../../Containers/Home/TestimonialSlider/TestimonialSlider";

const Home = () => {
   return (
      <div>
         <Banner />
         <OnlineOrder />
         <About />
         <OurMenu />
         <CallToAction />
         <RecommendFoods />
         <MenuBanner />
         <TestimonialSlider />
      </div>
   );
};

export default Home;
