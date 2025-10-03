import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top pd-70">
        <div className="newsletter-box orange-bg">
          <div className="flex justify-between items-center">
            <h3>ontvang exclusieve<br /> updates van ons</h3>
            <ul>
              <li>New arrivals</li>
              <li>VIP toegang</li>
              <li>Laatste nieuws</li>
            </ul>
            <div className="newsletter">
              <input type="email" placeholder="Uw mailadres" />
              <button className="primary-btn arrow-btn dark-bg">verzenden</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="max-w-7xl mx-auto">
          <div className="footer-bottom-top">
            <div className="flex items-center">
              <div className="logo-footer">
                <img src="/assets/image/logo.png" alt="" />
              </div>
              <div className="footer-contact items-center">
                <ul className="flex items-center">
                  <li><a href="#" className="primary-btn orange-bg phone-icon">+31 (0) 548 234880</a></li>
                  <li><a href="#" className="primary-btn orange-bg email-icon">info@cartelier.nl</a></li>
                  <li className="address ft-18 white-text">Galvanistraat 15E, 7461 JC Rijssen</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-last">
            <div className="flex">
              <div className="col-4 footer-timing">
                <p>U kunt ons tijdens kantooruren van maandag tot vrijdag (08:00 - 16:00) bellen. Ons team
                  staat graag voor u klaar om al
                  uw vragen te beantwoorden.</p>
                <ul className="flex white-text ft-14">
                  <li>Copyright © 2025 CARTELIER</li>
                  <li>Design by rijnders webdesign</li>
                </ul>
              </div>
              <div className="col-4">
                <span className="footer-title ft-18 white-text">Navigatie</span>
                <div className="footer-navs flex">
                  <ul className="navigation-footer">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/over-ons">Over ons</Link></li>
                    <li><a href="#">Collecties</a></li>
                    <li><a href="#">Aflevering</a></li>
                  </ul>
                  <ul className="navigation-footer">
                    <li><Link href="/contact">Contact</Link></li>
                    <li><a href="#">Onze werkwijze</a></li>
                    <li><a href="#">Algemene voorwaarden</a></li>
                    <li><a href="#">Privacy Beleid</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <span className="footer-title ft-18 white-text">Socials</span>
                <ul className="social-icon flex">
                  <li><a href="#" className="facebook"><img src="/assets/icons/facebook.svg" alt="" /></a></li>
                  <li><a href="https://www.linkedin.com/company/carteli%C3%A9r/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="linkedin"><img src="/assets/icons/linkedin.svg" alt="" /></a></li>
                  <li><a href="https://www.instagram.com/cartelier.nl/" target="_blank" rel="noopener noreferrer" className="insta"><img src="/assets/icons/instagram.svg" alt="" /></a></li>
                  <li><a href="#" className="youtube"><img src="/assets/icons/youtube.svg" alt="" /></a></li>
                </ul>
              </div>
              <div className="col-2">
                <span className="footer-title ft-18 white-text"><Link href="/garanties">Garanties</Link></span>
                <div className="guranties-img">
                  <img src="/assets/icons/RDW.svg" alt="" />
                  <img src="/assets/icons/autotrust.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
