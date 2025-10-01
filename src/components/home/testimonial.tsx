import React from 'react'
import Image from 'next/image'

function Testimonial() {
  return (
    <section className="testimonials_section">
      <div className="max-w-7xl mx-auto">
        <div className="testimonials_text text-center">
          <h3 className="white-text size-48 mb-35"><span className="orange-text">verhalen van</span><br /> tevreden
            klanten
          </h3>
          <p>De ervaringen van onze klanten bevestigen waar Cartelier voor staat: kwaliteit, betrouwbaarheid
            en
            service op<br /> het
            hoogste niveau. Lees hoe anderen hun weg naar de perfecte auto bij ons hebben gevonden.</p>
        </div>
        <div className="testimonials_boxes flex   gap-20 justify-between">
          <div className="testimonials_left_box">
            <div className="testimonials_box">
              <div className="test-top flex justify-between items-center">
                <div className="test-top-left flex items-center">
                  <div className="auther-img"></div>
                  <div className="auther-detail">
                    <span className="title">Henk</span>
                    <p>Kocht: BMW 535e-hybrid</p>
                  </div>
                </div>
                <div className="test-top-right">
                  <ul className="flex mr-11">
                    <li><Image src="/assets/icons/review-star.svg" alt="" layout="responsive"
                      objectFit="contain" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                  </ul>
                </div>
              </div>
              <Image src="/assets/image/serjan-midili-8iZdhhP5bwg-unsplash.webp" alt="" width={563} height={374} />
              <span className="review-title">Heldere communicatie, persoonlijke aandacht en een uiterst professionele werkwijze</span>
              <p>Van het eerste contact tot de uiteindelijke aflevering van mijn prachtige VW Passat GTE uiterst tevreden. Heldere communicatie, persoonlijke aandacht en een uiterst professionele werkwijze. Je merkt dat bij Rutger klanttevredenheid écht centraal staat. Een bedrijf waar vertrouwen en kwaliteit voorop staan. Absoluut een aanrader!</p>

            </div>
          </div>
          <div className="testimonials_right_box">
            <div className="testimonials_box">
              <div className="test-top flex justify-between items-center">
                <div className="test-top-left flex items-center">
                  <div className="auther-img"></div>
                  <div className="auther-detail">
                    <span className="title">Erjen Rijnders</span>
                    <p>Kocht: BMW 535e-hybrid</p>
                  </div>
                </div>
                <div className="test-top-right">
                  <ul className="flex mr-11">
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                  </ul>
                </div>
              </div>
              <span className="review-title">Top bedrijf met een fijne service </span>
              <p>Top bedrijf met een fijne service. Ze denken goed mee, nemen de tijd om alles duidelijk uit te leggen en geven eerlijk advies. Ik kan ze absoluut aanraden.</p>
            </div>
            <div className="testimonials_box">
              <div className="test-top flex justify-between items-center">
                <div className="test-top-left flex items-center">
                  <div className="auther-img"></div>
                  <div className="auther-detail">
                    <span className="title">Daniel van Egmond</span>
                    <p>Kocht: BMW 535e-hybrid</p>
                  </div>
                </div>
                <div className="test-top-right">
                  <ul className="flex mr-11">
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                    <li><Image src="/assets/icons/review-star.svg" alt="" width={24} height={24} /></li>
                  </ul>
                </div>
              </div>
              <span className="review-title">Ik kreeg makkelijk en snel contact</span>
              <p>Ik kreeg makkelijk en snel contact om langs te komen en als ik vragen had waren die snel beantwoord.</p>
            </div>
            <div className="all_testimonials"><a href="https://nl.trustpilot.com/review/cartelier.nl" target="_blank" className="arrow-btn orange-bg primary-btn">Bekijk alle
              reviews</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testimonial
