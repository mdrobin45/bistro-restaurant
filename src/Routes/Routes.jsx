import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Shop from "../Pages/Shop/Shop";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/our-menu",
            element: <OurMenu />,
         },
         {
            path: "/shop",
            element: <Shop />,
         },
      ],
   },
]);

export default router;
