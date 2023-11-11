import { NavLink } from "react-router-dom";

const NavMenuLink = ({ text, url }) => {
   return (
      <NavLink className="text-white text-md font-light uppercase" to={url}>
         {text}
      </NavLink>
   );
};

export default NavMenuLink;
