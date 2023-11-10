import About from "../../Containers/Home/About/About";
import Banner from "../../Containers/Home/Banner/Banner";
import OnlineOrder from "../../Containers/Home/OnlineOrder/OnlineOrder";

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
      </div>
   );
};

export default Home;
