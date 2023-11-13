import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";
import router from "./Routes/Routes.jsx";
import "./index.css";

// Create query a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
   <ThemeProvider>
      <AuthContextProvider>
         <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer autoClose={1500} />
         </QueryClientProvider>
      </AuthContextProvider>
   </ThemeProvider>
);
