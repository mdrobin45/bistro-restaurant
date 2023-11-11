import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import TestimonialCard from "../../../Components/TestimonialCard/TestimonialCard";

const TestimonialSlider = () => {
   return (
      <div className="my-20">
         <SectionHeader title="TESTIMONIALS" subtitle="What Our Clients Say" />
         <Swiper
            navigation={true}
            loop={true}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay, Navigation]}>
            <SwiperSlide>
               <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
               <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
               <TestimonialCard />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default TestimonialSlider;
