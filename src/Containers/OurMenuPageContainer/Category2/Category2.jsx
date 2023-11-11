import ButtonLink from "../../../Components/ButtonLink/ButtonLink";
import Cover from "../../../Components/Cover/Cover";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import image from "../../../assets/menu/salad-bg.jpg";

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
];
const Category2 = () => {
   return (
      <section className="2xl:max-w-[1200px] mx-auto">
         <Cover
            title="DESSERTS"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            bgImage={image}
         />
         <div className="py-20 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 gap-10 pt-6">
               {menuList.map((item, index) => (
                  <MenuItem
                     key={index}
                     title={item.title}
                     description={item.description}
                  />
               ))}
            </div>
            <ButtonLink text="ORDER YOUR FAVORITES FOOD" url="/shop" />
         </div>
      </section>
   );
};

export default Category2;
