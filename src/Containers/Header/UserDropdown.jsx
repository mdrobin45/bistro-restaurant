import {
   Avatar,
   Button,
   Menu,
   MenuHandler,
   MenuItem,
   MenuList,
   Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.svg";

const UserDropdown = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <Menu
         allowHover={true}
         open={isMenuOpen}
         handler={setIsMenuOpen}
         placement="bottom-end">
         <MenuHandler>
            <Button
               variant="text"
               color="blue-gray"
               className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
               <Avatar
                  variant="circular"
                  size="sm"
                  alt="Profile"
                  // className="border-2 border-primary p-0.5"
                  // src={
                  //    user ? user.photoURL : "https://i.ibb.co/238dYyx/user.png"
                  // }
                  src={avatar}
               />
            </Button>
         </MenuHandler>
         <MenuList className="p-1">
            <p className="px-2 font-bold py-2 text-black">
               {/* {user?.displayName} */}
               Robin Rana
            </p>
            <hr />
            <Link to="/dashboard">
               <MenuItem>
                  <Typography as="span" variant="small" className="font-normal">
                     Dashboard
                  </Typography>
               </MenuItem>
            </Link>
            <Link to="/my-profile">
               <MenuItem>
                  <Typography as="span" variant="small" className="font-normal">
                     My Profile
                  </Typography>
               </MenuItem>
            </Link>
            <MenuItem className="hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
               <Typography
                  // onClick={handleLogOut}
                  color="red"
                  as="span"
                  variant="small"
                  className="font-normal">
                  Sign Out
               </Typography>
            </MenuItem>
         </MenuList>
      </Menu>
   );
};

export default UserDropdown;
