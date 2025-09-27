import React from 'react'
import Image from 'next/image'

function Testimonial() {
  return (
    <section className="testimonials_section">
      <div className="max-w-7xl mx-auto">
        <div className="testimonials_text text-center">
          <h3 className="white-text uppercase text-[48px]  mb-35"><span className="orange-text">verhalen van</span><br /> tevreden
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
                    <span className="title">Nathalie Simons</span>
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
              <Image src="/assets/image/serjan-midili-8iZdhhP5bwg-unsplash.webp" alt="" width={100} height={100} />
              <span className="review-title">Super vriendelijke mensen!</span>
              <p>Uitstekende service van begin tot eind. Cartelier nam de tijd om mijn wensen te begrijpen
                en
                heeft mij geholpen de
                perfecte auto te vinden. Alles verliep vlot en professioneel.</p>
              <p>Het was ontzettend fijn hoe ik werdt begeleid in het kiezen van mijn auto. Ik heb uitleg
                gekregen
                over de opties,
                afleverpakketten en andere mogelijkheden. Echt super!</p>
              <p className="last-text">“De service was van begin tot eind uitstekend en vriendelijk”</p>
            </div>
          </div>
          <div className="testimonials_right_box">
            <div className="testimonials_box">
              <div className="test-top flex justify-between items-center">
                <div className="test-top-left flex items-center">
                  <div className="auther-img"></div>
                  <div className="auther-detail">
                    <span className="title">Nathalie Simons</span>
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
              <span className="review-title">Super vriendelijke mensen!</span>
              <p>Uitstekende service van begin tot eind. Cartelier nam de tijd om mijn wensen te begrijpen
                en
                heeft mij geholpen de
                perfecte auto te vinden. Alles verliep vlot en professioneel.</p>
              <p>Het was ontzettend fijn hoe ik werdt begeleid in het kiezen van mijn auto. Ik heb uitleg
                gekregen
                over de opties,
                afleverpakketten en andere mogelijkheden. Echt super!</p>
            </div>
            <div className="testimonials_box">
              <div className="test-top flex justify-between items-center">
                <div className="test-top-left flex items-center">
                  <div className="auther-img"></div>
                  <div className="auther-detail">
                    <span className="title">Nathalie Simons</span>
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
              <span className="review-title">Super vriendelijke mensen!</span>
              <p>Uitstekende service van begin tot eind. Cartelier nam de tijd om mijn wensen te begrijpen
                en
                heeft mij geholpen de
                perfecte auto te vinden. Alles verliep vlot en professioneel.</p>
              <p>Het was ontzettend fijn hoe ik werdt begeleid in het kiezen van mijn auto. Ik heb uitleg
                gekregen
                over de opties,
                afleverpakketten en andere mogelijkheden. Echt super!</p>
            </div>
            <div className="all_testimonials"><a href="#" className="arrow-btn orange-bg primary-btn">Bekijk alle
              reviews</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testimonial