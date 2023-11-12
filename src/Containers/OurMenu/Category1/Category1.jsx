import ButtonLink from "../../../Components/ButtonLink/ButtonLink";
import Cover from "../../../Components/Cover/Cover";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import useAllMenuItems from "../../../Hooks/useAllMenuItems";
import image from "../../../assets/menu/banner3.jpg";

const Category1 = () => {
   const { data: allMenuItems } = useAllMenuItems();
   const filteredMenu = allMenuItems.filter(
      (item) => item.category === "dessert"
   );
   const dessertItems = filteredMenu.slice(0, 6);

   return (
      <section className="2xl:max-w-[1200px] mx-auto">
         <Cover
            title="DESSERTS"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            bgImage={image}
         />
         <div className="py-20 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 gap-10 pt-6">
               {dessertItems.map((item, index) => (
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
      </section>
   );
};

export default Category1;
