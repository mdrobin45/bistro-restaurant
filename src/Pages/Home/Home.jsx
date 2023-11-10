import Banner from "../../Containers/Home/Banner/Banner";
import OnlineOrder from "../../Containers/Home/OnlineOrder/OnlineOrder";

const Home = () => {
   return (
      <div>
         <Banner />
         <div className="max-w-[1200px] mx-auto">
            <OnlineOrder />
         </div>
      </div>
   );
};

export default Home;
