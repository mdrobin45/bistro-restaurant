import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import MainLayout from "../Layouts/MainLayout";
import Cart from "../Pages/Dashboard/Cart/Cart";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
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
      ],
   },
   {
      path: "dashboard",
      element: (
         <PrivateRoute>
            <Dashboard />
         </PrivateRoute>
      ),
      children: [
         {
            path: "my-profile",
            element: <MyProfile />,
         },
         {
            path: "my-cart",
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
