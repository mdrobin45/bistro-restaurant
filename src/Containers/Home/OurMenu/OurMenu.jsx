import { Link } from "react-router-dom";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const menuList = [
   {
      title: "ROAST DUCK BREAST",
      description:
         "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
   },
   {
      title: "ESCALOPE DE VEAU",
      description:
         "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
   },
   {
      title: "FISH PARMENTIER",
      description:
         "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
   },
   {
      title: "CHICKEN AND WALNUT SALAD",
      description:
         "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
   },
   {
      title: "TUNA NIÇOISE",
      description:
         "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
   },
   {
      title: "ROASTED PORK BELLY",
      description:
         "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
   },
];
const OurMenu = () => {
   return (
      <div className="my-20">
         <SectionHeader title="FROM OUR MENU" subtitle="Check it out" />
         <div className="grid grid-cols-2 gap-10 pt-6">
            {menuList.map((item, index) => (
               <MenuItem
                  key={index}
                  title={item.title}
                  description={item.description}
               />
            ))}
         </div>
         <div className="mt-16 text-center">
            <Link
               to="/"
               className="bg-gray-100 border-b-2 transition-all hover:text-white border-secondary w-52 uppercase inline-block hover:bg-secondary text-primary text-md font-light py-3 px-4 rounded">
               View Full Menu
            </Link>
         </div>
      </div>
   );
};

export default OurMenu;
