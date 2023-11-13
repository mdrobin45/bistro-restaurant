import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGoogleSignInLogic from "../../Hooks/useGoogleSignInLogic";
import useLoginLogic from "../../Hooks/useLoginLogic";
import bgImage from "../../assets/authentication.png";
import image from "../../assets/authentication2.png";

const LoginForm = () => {
   const [showPassword, setShowPassword] = useState(false);
   const { handleGoogleSignIn } = useGoogleSignInLogic();
   const {
      register,
      handleSubmit,
      errors,
      onLoad,
      onSubmit,
      setToken,
      captchaRef,
   } = useLoginLogic();

   return (
      <div
         style={{ backgroundImage: `url(${bgImage})` }}
         className="flex shadow-2xl border border-gray-300 rounded p-20 items-center justify-between">
         <div className="w-2/4">
            <img className="w-full" src={image} alt="Login" />
         </div>
         <div className="w-90">
            <form onSubmit={handleSubmit(onSubmit)}>
               <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
               <div className="mb-4">
                  <Input
                     error={errors.email ? true : false}
                     {...register("email", {
                        required: true,
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Invalid",
                        },
                     })}
                     label={`Email ${
                        (errors.email?.type === "required"
                           ? "(required)"
                           : "") ||
                        (errors.email?.type === "pattern" ? "(Invalid)" : "")
                     }`}
                  />
               </div>
               <div className="mb-4">
                  <Input
                     {...register("password", {
                        required: "Password required",
                     })}
                     type={showPassword ? "text" : "password"}
                     label="Password"
                     icon={
                        showPassword ? (
                           <AiOutlineEye
                              onClick={() => {
                                 setShowPassword(!showPassword);
                              }}
                              className="text-lg cursor-pointer"
                           />
                        ) : (
                           <AiOutlineEyeInvisible
                              onClick={() => {
                                 setShowPassword(!showPassword);
                              }}
                              className="text-lg cursor-pointer"
                           />
                        )
                     }
                  />
               </div>
               <div>
                  <HCaptcha
                     sitekey="30f4092c-6e85-45b9-bce4-dcbe405be59b"
                     onLoad={onLoad}
                     onVerify={setToken}
                     ref={captchaRef}
                  />
               </div>
               <Button className="mt-3 w-full bg-primary" type="submit">
                  Login
               </Button>
               <p className="text-secondary mt-3 text-center">
                  New here?{" "}
                  <Link className="font-semibold" to="/register">
                     Create new account
                  </Link>
               </p>
               <div className="flex mt-3 items-center justify-center gap-4">
                  <IconButton onClick={handleGoogleSignIn}>
                     <FaGoogle className="text-2xl" />
                  </IconButton>
                  <IconButton>
                     <BsGithub className="text-2xl" />
                  </IconButton>
               </div>
            </form>
         </div>
      </div>
   );
};

export default LoginForm;
