import React from "react";
import slide1 from '../../assets/slide1.png' 
import slide2 from '../../assets/slide2.png' 
import slide3 from '../../assets/slide3.png' 
import slide4 from '../../assets/slide4.png' 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './SwiperCarousel.module.css'

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";



const SwiperComponent = () => {
  return (
    <div className={styles.swiper}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="Slide image" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="Slide image" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="Slide image" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="Slide image" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperComponent;