import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <section className="services_sections">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          <div className="service_left">
            <ul className="service_list">
              <li>
                <div className="icon">
                  <Image src="/assets/icons/list.svg" alt="" width={24} height={24} />
                </div>
                <div className="text">
                  <span className="title">Eenvoudig<br /> proces</span>
                  <p>Bij Cartelier verloopt het proces van reserveren of aanschaffen van uw droomauto
                    moeiteloos.</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <Image src="/assets/icons/clock.svg" alt="" width={24} height={24} />
                </div>
                <div className="text">
                  <span className="title">altijd<br /> op tijd</span>
                  <p>Bij Cartelier verloopt het proces van reserveren of aanschaffen van uw droomauto
                    moeiteloos.</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <Image src="/assets/icons/lock.svg" alt="" width={24} height={24} />
                </div>
                <div className="text">
                  <span className="title">Totale<br /> bescherming</span>
                  <p>Bij Cartelier verloopt het proces van reserveren of aanschaffen van uw droomauto
                    moeiteloos.</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <Image src="/assets/icons/crown.svg" alt="" width={24} height={24} />
                </div>
                <div className="text">
                  <span className="title">premium<br /> service</span>
                  <p>Bij Cartelier verloopt het proces van reserveren of aanschaffen van uw droomauto
                    moeiteloos.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="service_img">
            <Image src="/assets/image/hakon-sataoen-qyfco1nfMtg-unsplash 1.webp" alt="" width={965} height={620} />
            <div className="service_right_content">
              <Image src="/assets/image/exclusive-img.webp" alt="" width={225} height={130} />
              <h3 className="size-48 white-text">service,<br /> betrouwbaarheid<br /> <span className="orange-text">
                en een
                goede
                prijs</span>
              </h3>
              <a href="#" className="arrow-btn orange-bg primary-btn">Lees meer over ons</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Services }
