import { Button, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ProductCard from "../../Components/ProductCard/ProductCard";
import useCategoryMenuItems from "../../Hooks/useCategoryMenuItems";

const TabContent = ({ catName }) => {
   const { data: foods } = useCategoryMenuItems(catName);
   const [currentPage, setCurrentPage] = useState(1);
   const showPerPage = 4;
   const numberOfFoodCards = foods.length;
   const totalPage = Math.ceil(numberOfFoodCards / 4);

   const startIndex = (currentPage - 1) * showPerPage;
   const endIndex = startIndex + showPerPage;

   const displayFoods = foods.slice(startIndex, endIndex);
   const pagesArray = [];
   for (let i = 1; i <= totalPage; i++) {
      pagesArray.push(i);
   }

   // Reset current page when tab change
   useEffect(() => {
      setCurrentPage(1);
   }, [foods]);
   return (
      <>
         <div className="grid grid-cols-4 gap-4 my-10">
            {displayFoods.map((food) => (
               <ProductCard
                  key={food._id}
                  name={food.name}
                  recipe={food.recipe}
                  image={food.image}
               />
            ))}
         </div>
         <div className="flex items-center justify-center gap-4">
            <Button
               variant="text"
               className="flex items-center gap-2"
               onClick={() => {
                  setCurrentPage((preValue) => preValue - 1);
               }}
               disabled={currentPage === 1}>
               <BsArrowLeft /> Previous
            </Button>
            <div className="flex items-center gap-2">
               {pagesArray.map((number, index) => (
                  <IconButton
                     className="bg-transparent text-gray-900 shadow-none"
                     onClick={() => {
                        setCurrentPage(number);
                     }}
                     key={index}>
                     {number}
                  </IconButton>
               ))}
            </div>
            <Button
               variant="text"
               className="flex items-center gap-2"
               onClick={() => {
                  setCurrentPage((preValue) => preValue + 1);
               }}
               disabled={currentPage === totalPage}>
               Next <BsArrowRight />
            </Button>{" "}
         </div>
      </>
   );
};

export default TabContent;
