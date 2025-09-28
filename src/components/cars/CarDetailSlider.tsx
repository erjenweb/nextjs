'use client'; // 👈 CRITICAL: This makes it a Client Component

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Define the type for the image array and any other necessary data
interface CarDetailSliderProps {
    images: string[];
    merk: string;
    model: string;
}

export function CarDetailSlider({ images, merk, model }: CarDetailSliderProps) {

    if (!images || images.length === 0) {
        // Render a fallback if no images are available
        return <div className="text-white">No images for the gallery.</div>;
    }

    return (
        <Swiper
            className="swiper detail-slider relative swiper-initialized swiper-horizontal swiper-backface-hidden"
            loop={true}
            spaceBetween={20}
            autoplay={false}
            slidesPerView={'auto'}
            autoHeight={true}
            // Remove console.logs if not needed:
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 'auto' },
            }}
            modules={[Navigation, Pagination]}
        >

            {/* 🚀 Looping through the actual car images */}
            {images.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                    <div className="detail-slider-img">
                        {/* Use Next.js Image component for optimization */}
                        <Image
                            src={imageUrl}
                            alt={`${merk} ${model} image ${index + 1}`}
                            height={900}
                            width={600}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
            ))}

            <div className="slider-arrow">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            <div className="swiper-pagination"></div> {/* Add pagination container */}
        </Swiper>
    );
}