import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedCard from "../../../Components/FeaturedCard/FeaturedCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import "./style.css";
const OnlineOrder = () => {
   const swiperRef = useRef();
   return (
      <div className="my-20">
         <SectionHeader
            title="Online order"
            subtitle="From 11:00am to 10:00pm"
         />
         <div className="flex items-center justify-end gap-3">
            <span
               onClick={() => swiperRef.current?.slidePrev()}
               className="bg-primary text-white text-xl flex flex-col items-center justify-center h-10 w-10 cursor-pointer rounded-full">
               <BsArrowLeft />
            </span>
            <span
               onClick={() => swiperRef.current?.slideNext()}
               className="bg-primary text-white text-xl flex flex-col items-center justify-center h-10 w-10 cursor-pointer rounded-full">
               <BsArrowRight />
            </span>
         </div>
         <Swiper
            loop={true}
            spaceBetween={30}
            autoplay={{ delay: 1500 }}
            slidesPerView={4}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            modules={[Grid, Pagination, Navigation, Autoplay]}
            className="onlineOrderSlider mt-10 mb-20">
            <SwiperSlide>
               <FeaturedCard
                  bgImage="https://i.ibb.co/cFqhKr3/slide4.jpg"
                  title="Salads"
               />
            </SwiperSlide>
            <SwiperSlide className="customeClass">
               <FeaturedCard
                  bgImage="https://i.ibb.co/TMXnPg9/slide5.jpg"
                  title="Soups"
               />
            </SwiperSlide>
            <SwiperSlide className="customeClass">
               <FeaturedCard
                  bgImage="https://i.ibb.co/dQDjXXY/slide2.jpg"
                  title="pizzas"
               />
            </SwiperSlide>
            <SwiperSlide className="customeClass">
               <FeaturedCard
                  bgImage="https://i.ibb.co/YtFFZXp/slide3.jpg"
                  title="desserts"
               />
            </SwiperSlide>
            <SwiperSlide className="customeClass">
               <FeaturedCard
                  bgImage="https://i.ibb.co/TMXnPg9/slide5.jpg"
                  title="Salads"
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default OnlineOrder;
