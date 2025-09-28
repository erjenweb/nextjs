'use client'

import * as React from "react";
import Image from 'next/image'
import Link from 'next/link';
import MegaMenu from "@/components/common/megamenu";
import {useState} from "react";

function Header({ ...props }: React.HTMLAttributes<HTMLDivElement>) {

  const [ToggleMenu,setToggleMenu] = useState(false);
  const ToggleMegaMenu = () =>{
   setToggleMenu(!ToggleMenu);
  }
  return (
    <header className="absolute w-full z-50 px-6 py-4" {...props}>
      <nav className="flex items-center justify-between max-w-7xl mx-0">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image width={315} height={100} src="/assets/image/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="w-10 h-10  rounded-full cursor-pointer menu_icon" onClick={ToggleMegaMenu}>
            <Image width={100} height={100} src="/assets/image/connect-icon.svg" alt="" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full cursor-pointer customer_image">
            <Image height={100} width={100} src="/assets/image/profile-icon.png" alt="" />
          </a>
          <Link href="/contact"
            className="px-6 py-2 bg-brand-orange text-white rounded-full cursor-pointer bg-orange-600 transition-colors site_links">
            Neem contact op
          </Link>
        </div>
      </nav>

      <div  className={`mega-menu ${ToggleMenu?'open-nav':''}`} >
      <MegaMenu />
      </div>
    </header>
  );
}

export { Header };