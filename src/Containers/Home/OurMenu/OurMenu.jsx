import ButtonLink from "../../../Components/ButtonLink/ButtonLink";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAllMenuItems from "../../../Hooks/useAllMenuItems";

const OurMenu = () => {
   let { data: menuItems } = useAllMenuItems();
   menuItems = menuItems.slice(0, 6);
   return (
      <div className="my-20 max-w-[1200px] mx-auto">
         <SectionHeader title="FROM OUR MENU" subtitle="Check it out" />
         <div className="grid grid-cols-2 gap-10 pt-6">
            {menuItems.map((item, index) => (
               <MenuItem
                  key={index}
                  name={item.name}
                  recipe={item.recipe}
                  price={item.price}
                  image={item.image}
               />
            ))}
         </div>
         <ButtonLink text="View Full Menu" url="/shop" />
      </div>
   );
};

export default OurMenu;
