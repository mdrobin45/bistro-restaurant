import { Outlet } from "react-router-dom";
import Footer from "../Containers/Footer/Footer";
import Header from "../Containers/Header/Header";

const MainLayout = () => {
   return (
      <div className="2xl:max-w-[1200px] mx-auto relative">
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;
