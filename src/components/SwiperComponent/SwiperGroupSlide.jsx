import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import CardItem from "../CardItem/CardItem";


const SwiperGroupSlide = ({ data }) => {
  console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.items.map((item) => 
            <SwiperSlide>
              <CardItem 
                key={item.id} 
                type={item.type} 
                description={item.description} 
                imgSrc={item.img_src} 
                imgHoverSrc={item.img_hover_src} 
                price={item.price} 
                priceDiscount={item.price_with_discount} 
                inStock={item.in_stock} 
              />
            </SwiperSlide>
          )}
      </Swiper>
    </>
  )
}

export default SwiperGroupSlide