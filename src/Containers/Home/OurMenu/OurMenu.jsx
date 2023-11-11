import ButtonLink from "../../../Components/ButtonLink/ButtonLink";
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
      <div className="my-20 max-w-[1200px] mx-auto">
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
         <ButtonLink text="View Full Menu" url="/shop" />
      </div>
   );
};

export default OurMenu;
