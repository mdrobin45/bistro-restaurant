import { Button } from "@material-tailwind/react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import image from "../../../assets/home/featured.jpg";

const MenuBanner = () => {
   return (
      <div>
         <SectionHeader title="FROM OUR MENU" subtitle="Check it out" />
         <div
            style={{
               background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${image})`,
               backgroundSize: "cover",
               backgroundPosition: "center center",
            }}
            className="flex py-16 p-10 items-center justify-center gap-5">
            <div>
               <img
                  className=" w-3/4 ml-auto rounded-full"
                  src={image}
                  alt="Featured"
               />
            </div>
            <div className="text-white">
               <h2 className="text-2xl font-bold text-white pb-2">
                  March 20, 2023 WHERE CAN I GET SOME?
               </h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
               </p>
               <Button className="bg-transparent border-b-2 transition-all mt-6 text-white border-white w-52 uppercase inline-block hover:bg-secondary text-md font-light py-3 px-4 rounded">
                  Add To Cart
               </Button>
            </div>
         </div>
      </div>
   );
};

export default MenuBanner;
