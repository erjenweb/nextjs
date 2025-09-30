'use client'

import limitWords from "@/lib/limitWords"
import Link from 'next/link';

type Car = {
  _id: string;
  hexon_nr: string;
  license_plate: string;
  merk: string;
  model: string;
  title_nl: string;
  topSpeed: string;
  buildYear: string;
  short_desc: string;
  remarks_nl:string;
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

export default function CarList({ cars }: CarListProps) {
  return (
    <>
      {cars.map((car) => (
        <div key={car._id} className="collection-post radius-40">
          <div className="post-img relative radius-40">
            {car.images?.length > 0 && (
              <img
                src={car.images[0]}
                alt={`${car.merk} ${car.model}`}
                className="w-full h-full object-cover radius-40"
              />
            )}
            <div className="post-detail flex justify-between absolute items-center">
              <h3 className="ft-30 white-text">{car.merk} {car.model}</h3>
              <Link href={`/product/${car.hexon_nr}`} className="primary-btn arrow-btn orange-bg"> {car.merk} <br /> {car.model}</Link>
            </div>
          </div>
          <div className="post-main-detail flex flex-row r-gap-36">
            <div className="flex justify-between items-center">
              <div className="car-detail">
                <div className="icon">
                  <img src="./assets/icons/gauge-max.svg" alt="" />
                </div>
                <p className="ft-18 white-text">{car.topSpeed}</p>
              </div>
              <div className="car-detail">
                <div className="icon">
                  <img src="./assets/icons/Gas-pump.svg" alt="" />
                </div>
                <p className="ft-18 white-text">hybride</p>
              </div>
              <div className="car-detail">
                <div className="icon">
                  <img src="./assets/icons/calendar.svg" alt="" />
                </div>
                <p className="ft-18 white-text">{car.buildYear}</p>
              </div>
              <div className="car-detail">
                <div className="icon">
                  <img src="./assets/icons/transmission.svg" alt="" />
                </div>
                <p className="ft-18 white-text">Automaat</p>
              </div>
            </div>
            <div className="car-detil-bottom">
              <h4 className="ft-22 white-text">{car?.title_nl}</h4>
              <p className="white-text ft-18" dangerouslySetInnerHTML={{ __html: limitWords(car?.remarks_nl, 30)}} />
            </div>
            <div className="flex justify-between items-center">
              <div className="price-white-box flex items-center white-bg radius-40">
                <small>Prijs</small>
                <h5>{new Intl.NumberFormat("nl-NL").format(Number(car.pricing.amount))},-</h5>
              </div>
              <div className="lease-price">
                <p className="ft-12 white-text">Leasebedrag</p>
                <p className="ft-18 flex items-center carla "><span className="ft-8 mr-5">va.</span> 513
                  <span className="ft-8 ml-15">p/m</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
