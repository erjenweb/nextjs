"use client";

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';


function Brand() {
  return (
    <section className="brand-section">
      <div className="max-w-7xl mx-auto">

        <Swiper
          loop={true}
          className="swiper brand-slider"
          slidesPerView={3}
          spaceBetween={20}
          autoplay={true}

          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image
                src="/assets/icons/min-coper.svg"
                alt="Mini Cooper"
                width={100}
                height={100}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/icons/cupra.svg" alt="Cupra" width={100} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/icons/star.svg" alt="Star" width={100} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/icons/mg.svg" alt="MG" width={100} height={100} />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className="brand-logo flex items-center justify-center">
              <Image src="/assets/icons/renolt.svg" alt="Renault" width={100} height={100} />
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </section >
  )
}

export { Brand }
