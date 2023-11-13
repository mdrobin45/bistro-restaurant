import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { showToast } from "../Utils/toast";
import useAuth from "./useAuth";

const useRegisterLogic = () => {
   const [token, setToken] = useState(null);
   const captchaRef = useRef(null);
   const { registerWithEmailPassword, profileUpdate } = useAuth();
   const { state } = useLocation();
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // Load captcha when page load
   const onLoad = () => {
      captchaRef.current.execute();
   };

   // Submit form handler
   const onSubmit = (data) => {
      if (!token) {
         showToast("Please Verify Captcha", "error");
         return;
      }
      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password signUp
      registerWithEmailPassword(data.email, data.password)
         .then((result) => {
            if (result.user) {
               profileUpdate({
                  displayName: data.name,
               });
               // Show toast
               toast.update(toastMsg, {
                  render: "Registration Successful!",
                  type: "success",
                  isLoading: false,
               });
               navigate(state ? state.prevUrl : "/");
            }
         })
         .catch(() => {
            toast.update(toastMsg, {
               render: "Registration failed!",
               type: "error",
               isLoading: false,
            });
         });
   };
   return {
      register,
      handleSubmit,
      errors,
      onLoad,
      onSubmit,
      setToken,
      captchaRef,
   };
};

export default useRegisterLogic;
