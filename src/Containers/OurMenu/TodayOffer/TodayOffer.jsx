import ButtonLink from "../../../Components/ButtonLink/ButtonLink";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAllMenuItems from "../../../Hooks/useAllMenuItems";

const TodayOffer = () => {
   const { data: allMenuItems } = useAllMenuItems();
   const filteredMenu = allMenuItems.filter((item) => item.category === "soup");
   const soupItems = filteredMenu.slice(0, 4);
   return (
      <div className="py-20 max-w-[1200px] mx-auto">
         <SectionHeader title="TODAY'S OFFER" subtitle="Don't miss" />
         <div className="grid grid-cols-2 gap-10 pt-6">
            {soupItems.map((item, index) => (
               <MenuItem
                  key={index}
                  name={item.name}
                  recipe={item.recipe}
                  price={item.price}
                  image={item.image}
               />
            ))}
         </div>
         <ButtonLink text="ORDER YOUR FAVORITES FOOD" url="/shop" />
      </div>
   );
};

export default TodayOffer;
