import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { showToast } from "../Utils/toast";
import useAuth from "./useAuth";

const useLoginLogic = () => {
   const [token, setToken] = useState(null);
   const captchaRef = useRef(null);
   const { loginWithEmailPassword } = useAuth();
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

      // Firebase email password login
      loginWithEmailPassword(data.email, data.password)
         .then((result) => {
            if (result.user) {
               // Update toast
               toast.update(toastMsg, {
                  render: "Login Successful!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               navigate(state ? state.prevUrl : "/");
            }
         })
         .catch((err) => {
            if (err) {
               toast.update(toastMsg, {
                  render: "Incorrect email or password",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
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

export default useLoginLogic;
