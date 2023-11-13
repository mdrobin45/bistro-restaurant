import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { isLoading, user } = useAuth();

   if (isLoading) {
      return (
         <div className="h-screen flex flex-col items-center justify-center">
            <ClipLoader color="#EF1D26" />
         </div>
      );
   }
   if (!user) {
      return <Navigate to="/login" state={{ prevUrl: location.pathname }} />;
   }
   return children;
};

export default PrivateRoute;
