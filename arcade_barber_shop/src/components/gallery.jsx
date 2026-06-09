import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "../styles/gallery.css";

// import required modules
import { EffectFade, Autoplay  } from 'swiper/modules';



export default function Gallery() {
  return (

    <section className="gallery_section">

      <div className="gallery_txt">
        <h1>Experience The Atmosphere</h1>
        <p>Discover the atmosphere, craftsmanship, and unique gaming experience that make every visit unforgettable</p>
      </div>

      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={8}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-gallery"><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-gallery"><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-gallery"><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-gallery"><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-gallery"><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-gallery"><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide-gallery"><img src="../public/banner.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </section>

  );
}

