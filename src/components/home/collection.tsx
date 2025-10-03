'use client';
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';


import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Link from "next/link";



type Car = {
  _id: string;
  hexon_nr: string;
  license_plate: string;
  merk: string;
  model: string;
  title_nl: string;
  topSpeed: string;
  odometerReading:{
    value:string,
    unit:string
  };
  buildYear: string;
  pricing: {
    country: string;
    amount: string;
    currency: string;
  };
  images: string[];
};

// Define props type
interface CarListProps {
  cars: Car[];
}



function Collection({ cars }: CarListProps) {

  return (
    <section className="collection-section w-full">
      <div className="blue-box">
        <div className="max-w-7xl mx-auto">
          <h2 className=""><span className="orange-text">Onze</span> bijzondere<br /> collectie </h2>
          <p className="">
            Ontdek een zorgvuldig samengestelde collectie van auto’s die uitblinken in stijl, prestaties en
            luxe. Elke wagen is geselecteerd om u een onvergetelijke rijervaring te bieden.
          </p>
        </div>
      </div>
      <div className="slider-box">
        <Swiper
          className="swiper collection-slider absolute inset-0 w-full h-full"
          loop={false}
          spaceBetween={20}
          autoplay={false}
          slidesPerView={'auto'}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          breakpoints={{
            640: { slidesPerView: 'auto' },
            1024: { slidesPerView: 'auto' },
          }}
          modules={[Navigation, Pagination]}
        >
          {cars.map((car) => (
            <SwiperSlide key={car._id}>
              <Link className="car-img-anchor" href={`/product/${car.hexon_nr}`}>

              <div className="collection-box">
                <div className="collection-img">
                  {car.images?.length > 0 && (

                          <Image src={car.images[0]}
                          alt={`${car.merk} ${car.model}`} height={900} width={600} className="w-full h-full object-cover" />


                  )}
                </div>
                <div className="collection-detail">
                  <div className="detail-top flex items-center">
                    <h3>{car.merk} {car.model}</h3>
                    <span  className="primary-btn arrow-btn orange-bg">Bekijk deze auto</span>
                  </div>
                  <div className="detail-bottom flex items-center">
                    <div className="price-box"><span className="small">Prijs</span> {new Intl.NumberFormat("nl-NL").format(Number(car.pricing.amount))},-</div>
                    <ul className="flex items-center">
                      <li><small>Leasebedrag</small>1.217 </li>
                      <li><small>KM stand</small>{car?.odometerReading?.value}</li>
                      <li><small>Bouwjaar</small>{car.buildYear}</li>
                    </ul>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}


          <div className="slider-arrow">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>

        </Swiper>


      </div>

      <div className="slider-button max-w-7xl mx-auto">
        <Link href="/aanbod" className="primary-btn arrow-btn orange-bg">bekijk al het aanbod</Link>
      </div>
    </section>

  );
}

export { Collection };
