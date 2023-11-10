import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import router from "./Routes/Routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ThemeProvider>
         <ParallaxProvider>
            <RouterProvider router={router} />
         </ParallaxProvider>
      </ThemeProvider>
   </React.StrictMode>
);
