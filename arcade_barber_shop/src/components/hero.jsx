import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import "../styles/hero.css"

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

export default function Banner_hero() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../public/banner_2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../public/room_gamer.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
      
    </>
  );
}


