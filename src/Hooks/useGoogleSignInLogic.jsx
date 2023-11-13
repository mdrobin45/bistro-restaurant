import { useLocation, useNavigate } from "react-router-dom";
import { showToast } from "../Utils/toast";
import useAuth from "./useAuth";

const useGoogleSignInLogic = () => {
   const { state } = useLocation();
   const navigate = useNavigate();
   const { loginWithGoogle } = useAuth();

   // Handle google signIn
   const handleGoogleSignIn = () => {
      console.log("Lcc");
      loginWithGoogle()
         .then((result) => {
            if (result.user) {
               showToast("Login Successful!", "success");
               navigate(state ? state.prevUrl : "/");
            }
         })
         .catch((err) => {
            if (err) {
               showToast("Something went wrong!", "error");
            }
         });
   };

   return { handleGoogleSignIn };
};

export default useGoogleSignInLogic;
