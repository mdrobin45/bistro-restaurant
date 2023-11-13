import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import PrivateRoute from "./PrivateRoute";

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
         {
            path: "/dashboard",
            element: (
               <PrivateRoute>
                  <Dashboard />
               </PrivateRoute>
            ),
         },
         {
            path: "/cart",
            element: <Cart />,
         },
      ],
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
]);

export default router;
