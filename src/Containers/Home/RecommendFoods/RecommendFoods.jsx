import ProductCard from "../../../Components/ProductCard/ProductCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAllMenuItems from "../../../Hooks/useAllMenuItems";

const RecommendFoods = () => {
   let { data: foodCards } = useAllMenuItems();
   foodCards = foodCards.slice(0, 3);
   return (
      <div className="py-20 max-w-[1200px] mx-auto">
         <SectionHeader title="CHEF RECOMMENDS" subtitle="Should Try" />
         <div className="grid grid-cols-3 gap-4">
            {foodCards.map((food) => (
               <ProductCard
                  key={food._id}
                  name={food.name}
                  recipe={food.recipe}
                  image={food.image}
               />
            ))}
         </div>
      </div>
   );
};

export default RecommendFoods;
