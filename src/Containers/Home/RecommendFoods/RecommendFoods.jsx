import ProductCard from "../../../Components/ProductCard/ProductCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const RecommendFoods = () => {
   return (
      <div className="py-20 max-w-[1200px] mx-auto">
         <SectionHeader title="CHEF RECOMMENDS" subtitle="Should Try" />
         <div className="grid grid-cols-3 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </div>
      </div>
   );
};

export default RecommendFoods;
