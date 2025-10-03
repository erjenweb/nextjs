import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import limitWords from "@/lib/limitWords"
import baseUrl from "@/lib/baseUrl";
import Link from "next/link";
import {CarDetailSlider } from "@/components/cars/CarDetailSlider"

type Car = {
  _id: string;
  hexon_nr: string;
  license_plate: string;
  merk: string;
  model: string;
  title_nl: string;
  topSpeed: string;
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

async function ProductDetail({ params }: { params: { slug: string } }) {


  const res = await fetch(`${baseUrl}/api/fetch/product/detail?hexon_nr=${params.slug}`,
    { cache: "no-store" }
  );

  const carDetail = await res.json();

  console.log("Car details", carDetail)

  return (
    <>
      <section className="detail-banner w-full">

        {carDetail.images?.length > 0 && (
          <Image height="1000" width="1920" src={carDetail.images[0]} alt="Banner" className="w-full object-cover" />
        )}
       <div className="info-fixed-box">
              <div className="flex items-center radius-40 justify-between">
                <div className="model flex items-center">
                  <Image height="100" width="100" src="/assets/icons/bmw-logo.svg" alt="" />
                  <h1 className="text-white uppercase carla">{carDetail?.merk} {carDetail?.model}</h1>
                </div>
                <div className="buttons flex items-center">
                  <div className="orange-btn">
                    <a href="#"
                      className="px-6 py-2 bg-brand-orange text-white rounded-full cursor-pointer bg-orange-600 transition-colors mr-5">Plan
                      een proefrit</a>
                  </div>
                  <div className="white-btn">
                    <a href="#"
                      className="px-6 py-2 bg-transparent border border-white text-white rounded-full transition-colors flex items-center gap-2">Financieringsopties</a>
                  </div>
                </div>
              </div>
            </div>

      </section>
      <section className="about-car-detail">
        <div className="max-w-7xl mx-auto">
          <div className="detail-box flex items-top">
            <div className="car-detail-left col-6">
              <div className="flex items-center gap-40 mb-40">
                <div className="price-white-box flex items-center white-bg radius-40">
                  <small>Prijs</small>
                  <h5>38.950,-</h5>
                </div>
                <div className="lease-price">
                  <p className="ft-12 white-text">Leasebedrag</p>
                  <p className="ft-18 flex items-center carla "><span className="ft-8 mr-5">va.</span> 513
                    <span className="ft-8 ml-15">p/m</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-44 mb-45">
                <div className="car-detail flex items-center gap-10">
                  <div className="icon">
                    <Image height="100" width="100" src="/assets/icons/gauge-max-orange.svg" alt="" />
                  </div>
                  <p className="ft-18 white-text">{carDetail?.topSpeed}</p>
                </div>
                <div className="car-detail flex items-center gap-10">
                  <div className="icon">
                    <Image height="100" width="100" src="/assets/icons/Gas-pump-orange..svg" alt="" />
                  </div>
                  <p className="ft-18 white-text">hybride</p>
                </div>
                <div className="car-detail flex items-center gap-10">
                  <div className="icon">
                    <Image height="100" width="100" src="/assets/icons/calendar-orange..svg" alt="" />
                  </div>
                  <p className="ft-18 white-text">{carDetail?.buildYear}</p>
                </div>
                <div className="car-detail flex items-center gap-10">
                  <div className="icon">
                    <Image height="100" width="100" src="/assets/icons/transmission-orange..svg" alt="" />
                  </div>
                  <p className="ft-18 white-text">Automaat</p>
                </div>
              </div>
              <div className="detail-content">
                <h2 className="orange-text ft-32">beschrijving</h2>
                <div className='text-white' dangerouslySetInnerHTML={{ __html: limitWords(carDetail?.remarks_nl, 150) }} />


              </div>
            </div>
            <div className="car-detail-right col-6">
              <CarDetailSlider
                  images={carDetail.images}
                  merk={carDetail.merk}
                  model={carDetail.model}
              />
            </div>
          </div>

          <div className="car-spacification">
            <div className="flex gap-156">
              <div className="col-6">
                <h3 className="ft-32 orange-text">Motor en transmissie</h3>
                <ul>
                  <li className="flex items-center"><span className="ft-18 light-text">Hexon nr</span><span
                    className="ft-18 white-text">{carDetail?.hexon_nr}</span></li>
                  <li className="flex items-center"><span className="ft-18 light-text">Merk</span><span
                    className="ft-18 white-text">{carDetail?.merk}</span></li>
                  <li className="flex items-center"><span className="ft-18 light-text">Model</span><span
                    className="ft-18 white-text">{carDetail?.model}</span></li>
                  <li className="flex items-center"><span className="ft-18 light-text">Category</span><span
                    className="ft-18 white-text">{carDetail?.category}</span></li>


                </ul>
              </div>
              <div className="col-6">
                <h3 className="ft-32 orange-text">Specificaties</h3>
                <ul>
                  <li className="flex items-center"><span className="ft-18 light-text">Type</span><span
                    className="ft-18 white-text">{carDetail?.type_name}</span></li>
                  <li className="flex items-center"><span className="ft-18 light-text">Top Speed</span><span
                    className="ft-18 white-text">{carDetail?.topSpeed}</span></li>
                  <li className="flex items-center"><span className="ft-18 light-text">Build Year</span><span
                    className="ft-18 white-text">{carDetail?.buildYear}</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="list-details">
            <div className="flex justify-between">
              <div className="col-4">
                <h4 className="ft-32 orange-text">Exterieur</h4>
                <ul>
                  <li className="ft-18 white-text">Body style {carDetail?.body_style}</li>
                  <li className="ft-18 white-text">Displacement {carDetail?.displacement}</li>

                </ul>
              </div>
              <div className="col-4">
                <h4 className="ft-32 orange-text">Colour</h4>
                <ul>
                  <li className="ft-18 white-text">Color {carDetail?.color || 'N/A'}</li>
                  <li className="ft-18 white-text">Color name {carDetail?.color_name || 'N/A'}</li>
                  <li className="ft-18 white-text">Paint type {carDetail?.paint_type || 'N/A'}</li>

                </ul>
              </div>
              <div className="col-4">
                <h4 className="ft-32 orange-text">Specification</h4>
                <ul>
                  <li className="ft-18 white-text">Door count {carDetail?.door_count || 'N/A'}</li>
                  <li className="ft-18 white-text">Cylinder count {carDetail?.cylinder_count || 'N/A'}</li>
                  <li className="ft-18 white-text">Seat count {carDetail?.seat_count || 'N/A'}</li>

                </ul>
              </div>
            </div>
            <div className="load-more">
              <a href="#" className="primary-btn orange-bg text-white arrow-down">meer laden</a>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-selection">
        <div className="max-w-7xl mx-auto">
          <div className="premium-heading">
            <h2 className="ft-48 white-text"><span className="orange-text">premium</span><br /> afleverpakketten</h2>
          </div>
          <div className="flex justify-between">
            <div className="col-4">
              <div className="benifits list-details">
                <h5 className="ft-32 white-text"><span className="orange-text">3 maand</span><br /> zekerheid</h5>
                <ul>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                </ul>

              </div>
            </div>
            <div className="col-4">
              <div className="benifits list-details">
                <div className="benifit-btn"><a href="#"
                  className="primary-btn orange-bg text-white arrow-star">meest gekozen</a></div>
                <h5 className="ft-32 white-text"><span className="orange-text">6 maand</span><br /> extra zeker</h5>
                <ul>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">Aangepaste leasevoorwaarden voor uw behoeften</li>
                  <li className="ft-18 white-text">Aangepaste leasevoorwaarden voor uw behoeften</li>
                  <li className="ft-18 white-text">Aangepaste leasevoorwaarden voor uw behoeften</li>
                  <li className="ft-18 white-text">Aangepaste leasevoorwaarden voor uw behoeften</li>
                  <li className="ft-18 white-text">Aangepaste leasevoorwaarden voor uw behoeften</li>
                  <li className="ft-18 white-text">Aangepaste leasevoorwaarden voor uw behoeften</li>
                  <li className="ft-18 white-text">Aangepaste leasevoorwaarden voor uw behoeften</li>
                  <li className="ft-18 white-text">Aangepaste leasevoorwaarden voor uw behoeften</li>
                </ul>

              </div>
            </div>
            <div className="col-4">
              <div className="benifits list-details">
                <h5 className="ft-32 white-text"><span className="orange-text">12 maand</span><br /> bovag garantie
                </h5>
                <ul>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">12 maanden garantie en onderhoud inbegrepen</li>
                  <li className="ft-18 white-text">transparante keuring + onderhoudshistorie</li>
                  <li className="ft-18 white-text">Persoonlijke begeleiding bij leasing of aankoop</li>
                  <li className="ft-18 white-text">Proefrit mogelijk aan huis</li>
                  <li className="ft-18 white-text">Flexibele financieringsopties beschikbaar</li>
                  <li className="ft-18 white-text">Gratis levering binnen 50 km</li>
                  <li className="ft-18 white-text">24/7 klantenservice voor al uw vragen</li>
                  <li className="ft-18 white-text">Uitgebreide selectie van merken en modellen</li>
                  <li className="ft-18 white-text">Korting voor trouwe klanten</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="detail-contact">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="col-8 flex ">
              <div className="owner-img flex items-center">
                <img className="owner-logo" src="/assets/image/owner-logo.svg" alt="" />
                <img src="/assets/image/DSC00256-Edit 1.webp" alt="" />
              </div>
              <div className="owner-contact">
                <h6 className="ft-32 white-text">ik heb interesse</h6>
                <a href="tel:+31 (0) 548 234880" className="primary-btn white-bg arrow-wts">+31 (0) 548 234880</a><br />
                <a href="mailto:" className="primary-btn grey-bg arrow-email">info@cartelier.nl</a>
              </div>
            </div>
            <div className="col-4">
              <div className="owner-right-content list-details">
                <h6 className="ft-32 orange-text">Waarom kiezen voor deze BMW bij Cartelier?</h6>
                <ul>
                  <li className="ft-18 white-text">Streng geselecteerde premium occasions</li>
                  <li className="ft-18 white-text">12 maanden garantie en onderhoud inbegrepen</li>
                  <li className="ft-18 white-text">transparante keuring + onderhoudshistorie</li>
                  <li className="ft-18 white-text">Persoonlijke begeleiding bij leasing of aankoop</li>
                  <li className="ft-18 white-text">Proefrit mogelijk aan huis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ProductDetail
