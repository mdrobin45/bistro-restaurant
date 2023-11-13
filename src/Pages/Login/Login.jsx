import LoginForm from "../../Containers/Login/LoginForm";
import bgImage from "../../assets/authentication.png";

const Login = () => {
   return (
      <div
         style={{ backgroundImage: `url(${bgImage})` }}
         className="h-screen flex items-center justify-center">
         <LoginForm />
      </div>
   );
};

export default Login;
