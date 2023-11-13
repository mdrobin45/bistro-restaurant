import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsGithub } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgImage from "../../assets/authentication.png";
import image from "../../assets/authentication2.png";

const RegisterForm = () => {
   const [token, setToken] = useState(null);
   const captchaRef = useRef(null);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   console.log(errors);
   // Load captcha when page load
   const onLoad = () => {
      captchaRef.current.execute();
   };

   // Submit form handler
   const onSubmit = (data) => {
      if (!token) {
         console.log("Please verify you are human");
         return;
      }
      console.log(data);
   };
   return (
      <div
         style={{ backgroundImage: `url(${bgImage})` }}
         className="flex shadow-2xl border border-gray-300 rounded p-20 items-center justify-between">
         <div className="w-2/4">
            <img className="w-full" src={image} alt="Login" />
         </div>
         <div className="w-96">
            <form onSubmit={handleSubmit(onSubmit)}>
               <h2 className="text-2xl font-bold text-center mb-4">
                  Create new account
               </h2>
               <div className="mb-4">
                  <Input
                     error={errors.name ? true : false}
                     {...register("name", {
                        required: true,
                        minLength: 3,
                     })}
                     label={`Name ${
                        errors.name?.type === "required" ? "(required)" : ""
                     }`}
                  />
               </div>
               <div className="mb-4">
                  <Input
                     error={errors.email ? true : false}
                     {...register("email", {
                        required: true,
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
                        required: true,
                        minLength: 6,
                        pattern: {
                           value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~-]).{7,}$/,
                        },
                     })}
                     type="password"
                     label="Password"
                  />
                  {(errors.password?.type === "minLength" && (
                     <span className="text-red-500 mt-3">
                        Password must be at least 6 characters long
                     </span>
                  )) ||
                     (errors.password?.type === "pattern" && (
                        <span className="text-red-500 mt-3">
                           Password must contain at least one capital letter and
                           special character
                        </span>
                     ))}
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
                  <IconButton>
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

export default RegisterForm;
