import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/01.jpg";
import slide2 from "../../../assets/home/02.jpg";
import slide3 from "../../../assets/home/03.png";
import slide4 from "../../../assets/home/04.jpg";
import "./style.css";

const Banner = () => {
   return (
      <Swiper
         scrollbar={{
            hide: true,
         }}
         modules={[Scrollbar]}>
         <SwiperSlide>
            <img src={slide1} alt="Slide" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={slide2} alt="Slide" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={slide3} alt="Slide" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={slide4} alt="Slide" />
         </SwiperSlide>
      </Swiper>
   );
};

export default Banner;
