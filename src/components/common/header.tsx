'use client'

import * as React from "react";
import Image from 'next/image'
import Link from 'next/link';

import {useEffect, useState} from "react";
import baseUrl from "@/lib/baseUrl";
import Car from "@/service/carEntity";

function Header({...props}: React.HTMLAttributes<HTMLDivElement>) {

    const [ToggleMenu, setToggleMenu] = useState(false);
    const ToggleMegaMenu = () => {
        setToggleMenu(!ToggleMenu);
    }

    const [menuCars, setMenuCars] = useState<Car[]>([]);

    useEffect(() => {
        const fetchCars = async () => {
            const response = await fetch('/api/fetch/product/list?limit=3');
            const resultCar = await response.json();
            setMenuCars(resultCar);
        };

        fetchCars(); // You forgot to call the function
    }, []); // You forgot the dependency array


    return (
        <header className="absolute w-full z-50 px-6 py-4" {...props}>
            <nav className="flex items-center justify-between max-w-7xl mx-0">
                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <Image width={315} height={100} src="/assets/image/logo.png" alt=""/>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="w-10 h-10  rounded-full cursor-pointer menu_icon" onClick={ToggleMegaMenu}>
                        <Image width={100} height={100} src="/assets/image/connect-icon.svg" alt=""/>
                    </a>
                    <Link href="/aanbod" className="w-12 h-12 rounded-full cursor-pointer customer_image">
                        <Image height={100} width={100} src="/assets/image/profile-icon.png" alt=""/>
                    </Link>
                    <Link href="/contact"
                          className="px-6 py-2 bg-brand-orange text-white rounded-full cursor-pointer bg-orange-600 transition-colors site_links">
                        Neem contact op
                    </Link>
                </div>
            </nav>

            <div className={`mega-menu ${ToggleMenu ? 'open-nav' : ''}`}>

                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/assets/image/bannr_video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="menu-left">
                            <ul>
                                <li>
                                    <span>Wie we zijn</span><br/>
                                    <Link onClick={ToggleMegaMenu} href="/over-ons"
                                          className="block ft-48 white-text carla">
                                        Over ons
                                    </Link>
                                </li>
                                <li>
                                    <span>Ons aanbod</span><br/>
                                    <Link onClick={ToggleMegaMenu} href="/aanbod"
                                          className="block ft-48 white-text carla">
                                        Collectie
                                    </Link>
                                </li>
                                <li>
                                    <span>Hoe we het doen</span><br/>
                                    <Link onClick={ToggleMegaMenu} href="/werkwijze"
                                          className="block ft-48 white-text carla">
                                        Werkwijze
                                    </Link>
                                </li>
                                <li>
                                    <span>Bereik ons</span><br/>
                                    <Link onClick={ToggleMegaMenu} href="/contact"
                                          className="block ft-48 white-text carla">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-right">
                            <div className="menu-right-top flex items-end">
                                <p className=" ft-48 white-text"><span className="orange-text">uitgelichte</span> <br/>occassions
                                </p>
                                <Link onClick={ToggleMegaMenu} href="/aanbod"
                                      className="primary-btn orange-bg arrow-btn">bekijk al het aanbod</Link>
                            </div>
                            <div className="occations-list flex justify-between">
                                {menuCars && menuCars.map((car:Car) => (
                                    <div key={car._id} className="occations-box">
                                        <Link href={`/product/${car.hexon_nr}`}>
                                            {car.images?.length > 0 && (
                                                <Image
                                                    height={600}
                                                    width={800}
                                                    src={car.images[0]}
                                                    alt={`${car.merk} ${car.model}`}
                                                    style={{width:"300px",height:"200px"}}

                                                />
                                            )}

                                            <p className="white-text">{car.merk || 'Car'}<br/>{car.model || 'Model'}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-bottom">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center">
                            <ul className="contact-info flex">
                                <li><a href="tel:+31 (0) 548 234880">+31 (0) 548 234880</a></li>
                                <li><a href="mailto:info@cartelier.nl">info@cartelier.nl</a></li>
                            </ul>
                            <ul className="social-icon flex">
                                <li><a href="#" className="facebook"><img src="/assets/icons/facebook.svg" alt=""/> </a>
                                </li>
                                <li><a href="https://www.linkedin.com/company/carteli%C3%A9r/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="linkedin"><img src="/assets/icons/linkedin.svg" alt=""/> </a>
                                </li>
                                <li><a href="https://www.instagram.com/cartelier.nl/" target="_blank" rel="noopener noreferrer" className="insta"><img src="/assets/icons/instagram.svg" alt=""/> </a>
                                </li>
                                <li><a href="#" className="youtube">
                                    <img src="/assets/icons/youtube.svg" alt=""/> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export { Header };
