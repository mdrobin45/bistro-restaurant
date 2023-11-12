import ProductCard from "../../Components/ProductCard/ProductCard";
import useCategoryMenuItems from "../../Hooks/useCategoryMenuItems";

const TabContent = ({ catName }) => {
   const { data: foods } = useCategoryMenuItems(catName);
   return (
      <div className="grid grid-cols-4 gap-4 my-10">
         {foods.map((food) => (
            <ProductCard
               key={food._id}
               name={food.name}
               recipe={food.recipe}
               image={food.image}
            />
         ))}
      </div>
   );
};

export default TabContent;
