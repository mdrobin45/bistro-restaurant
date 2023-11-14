import { Button } from "@material-tailwind/react";
import { MdOutlineLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import NavMenuLink from "../../Components/NavMenuLink/NavMenuLink";
import useAuth from "../../Hooks/useAuth";
import useCartProducts from "../../Hooks/useCartProducts";
import logo from "../../assets/logo.png";
import UserDropdown from "./UserDropdown";
import "./style.css";

const menuItems = [
   {
      text: "Home",
      link: "/",
   },
   {
      text: "Our Menu",
      link: "/our-menu",
   },
   {
      text: "Our Shop",
      link: "/shop",
   },
   {
      text: "Contact Us",
      link: "/contact-us",
   },
];
const Header = () => {
   const { user } = useAuth();
   const { cartProducts } = useCartProducts();
   const totalCart = cartProducts.length;
   return (
      <section className="flex absolute bg-gray-900 bg-opacity-50 w-full px-12 z-10 items-center justify-between">
         <div>
            <img className="w-32" src={logo} alt="Logo" />
         </div>
         <div>
            <ul className="flex items-center gap-4">
               {menuItems.map((item, index) => (
                  <li key={index}>
                     <NavMenuLink text={item.text} url={item.link} />
                  </li>
               ))}
               <Link to="/cart">
                  <div className="relative py-2">
                     <div className=" top-1 absolute -right-2">
                        <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                           {totalCart}
                        </p>
                     </div>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="file: h-6 w-6 text-white">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                     </svg>
                  </div>
               </Link>
               {!user ? (
                  <Link to="/login">
                     <Button className="flex text-secondary items-center gap-2 bg-primary font-light">
                        <MdOutlineLogin className="text-xl text-secondary" />
                        <span className="font-semibold">SIGN IN</span>
                     </Button>
                  </Link>
               ) : (
                  <UserDropdown />
               )}
            </ul>
         </div>
      </section>
   );
};

export default Header;
