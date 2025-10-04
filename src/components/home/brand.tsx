"use client";

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';


function Brand() {
  return (
    <section className="brand-section">
      <div className="max-w-7xl mx-auto">

        <Swiper
          loop={true}
          className="swiper brand-slider"
          slidesPerView={3}
          spaceBetween={40}
          autoplay={true}

          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Navigation, Pagination,Autoplay]}
        >
          
          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/image/porsche-svgrepo-com.svg" alt="Porche" width={100} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/image/audi-new-logo.svg" alt="audi" width={100} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/image/bmw-7.svg" alt="BMW" width={100} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/image/volvo.svg" alt="Volvo" width={100} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/image/volkswagen-10.svg" alt="Volkswagen" width={100} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/image/bmw-mini-1.svg" alt="Mini Cooper" width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/image/lynk-logo.png" alt="Lynk" width={100} height={100} />
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section >
  )
}

export { Brand }
