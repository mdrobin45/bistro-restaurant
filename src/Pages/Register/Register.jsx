import RegisterForm from "../../Containers/Register/RegisterForm";
import bgImage from "../../assets/authentication.png";

const Register = () => {
   return (
      <div
         style={{ backgroundImage: `url(${bgImage})` }}
         className="h-screen flex items-center justify-center">
         <RegisterForm />
      </div>
   );
};

export default Register;
