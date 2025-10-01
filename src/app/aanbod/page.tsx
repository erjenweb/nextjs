import React from 'react'
import CarList from "@/components/cars/CarList";
import baseUrl  from "@/lib/baseUrl";


async function Aanbod() {

  const res = await fetch(`${baseUrl}/api/fetch/aanbod`,{
    cache: 'no-store',
  });

  const cars = await res.json();


  return (
    <>
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
        <div className="filter-box">
          <div className="max-w-7xl mx-auto">
            <div className="filter-selection">

              <div className="filter flex items-center">
                <span className="ft-32 white-text carla">Sorteren</span>
                <select name="" id="" className="appearance-none">
                  <option value="">prijs</option>
                  <option value="">100-200</option>
                  <option value="">300-400</option>
                  <option value="">400-500</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collections-post">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start columns-3 gap-26 post-row">
            <div className="collection-post radius-40 collection-soon">
              <div className="post-img relative radius-40">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/luxury-black-audi-rs6-sports-car-XiJp87dkymTSTXeO3XT30jy2IXLLOU.jpg"
                     alt="Audi RS6" className="w-full h-full object-cover radius-40" />
                  <div className="coming-soon-text">
                    <h3 className="orange-text ft-32">coming<br /> soon</h3>
                  </div>
                  <div className="post-detail flex justify-between absolute items-center">
                    <h3 className="ft-30 white-text">Toyota<br /> Corolla</h3>
                    <a href="#" className="primary-btn arrow-btn orange-bg">Bekijk deze auto</a>
                  </div>
              </div>
              <div className="post-main-detail flex flex-row r-gap-36 relative">
                <div className="flex justify-between items-center">
                  <div className="car-detail">
                    <div className="icon">
                      <img src="/assets/icons/gauge-max.svg" alt="" />
                    </div>
                    <p className="ft-18 white-text">122.345</p>
                  </div>
                  <div className="car-detail">
                    <div className="icon">
                      <img src="/assets/icons/Gas-pump.svg" alt="" />
                    </div>
                    <p className="ft-18 white-text">hybride</p>
                  </div>
                  <div className="car-detail">
                    <div className="icon">
                      <img src="/assets/icons/calendar.svg" alt="" />
                    </div>
                    <p className="ft-18 white-text">2024</p>
                  </div>
                  <div className="car-detail">
                    <div className="icon">
                      <img src="/assets/icons/transmission.svg" alt="" />
                    </div>
                    <p className="ft-18 white-text">Automaat</p>
                  </div>
                </div>
                <div className="car-detil-bottom">
                  <h4 className="ft-22 white-text">BMW 3-serie Touring 330e Hybride M-Sport | Laser Led|NW
                    mod!</h4>
                  <p className="white-text ft-18">Ontdek een zorgvuldig samengestelde collectie van auto’s die
                    uitblinken in stijl, prestaties en luxe. Elke wagen is
                    geselecteerd om u een onvergetelijke rijervaring te bieden.</p>
                </div>
                <div className="flex justify-between items-center">
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
              </div>
            </div>
            <CarList cars={cars} />


            <div className="collection-post dont-know">
              <div className="dont-know-inner">
                <div className="dont-know-content">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/luxury-black-audi-rs6-sports-car-XiJp87dkymTSTXeO3XT30jy2IXLLOU.jpg"
                    alt="Audi RS6" className="w-full h-full object-cover radius-40" />
                  <h4 className="ft-48 white-text"><span className="orange-text">staat jouw droomauto</span> er
                    nog niet tussen?</h4>
                  <p className="ft-18 white-text">Ontdek een zorgvuldig samengestelde collectie van auto’s die
                    uitblinken in stijl,
                    prestaties en luxe. Elke wagen is
                    geselecteerd om u een onvergetelijke rijervaring te bieden.</p>
                  <a href="#contact-inner" className="primary-btn arrow-btn orange-bg">dien een aanvraag in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section pd-70">
        <div id='contact-inner' className="contact-inner">
          <div className="max-w-7xl mx-auto">
            <div className="contact-heading flex items-end justify-between">
              <h3 className="text-[48px] uppercase dark-text"><span className="orange-text">we helpen grAAg</span><br /> met de
                zoektocht
              </h3>
              <p>Heeft u vragen of zoekt u een specifieke auto? Vul het formulier in en ons team neemt
                persoonlijk
                contact met u op om u
                verder te helpen.</p>
            </div>
            <div className="flex justify-between">
              <div className="contact-form">
                <div className="form-first">
                  <span className="title">persoonlijke gegevens</span>
                  <div className="flex justify-between">
                    <div className="input-field">
                      <label htmlFor="">Volledige naam</label>
                      <input type="text" placeholder="Hoe mogen we je noemen" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="">E-mailadres</label>
                      <input type="text" placeholder="vul je e-mailadres in" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="">Telefoonnummer</label>
                      <input type="text" placeholder="Je telefoonnummer" />
                    </div>
                  </div>
                </div>
                <div className="form-second">
                  <span className="title">gegevens zoekopdracht</span>
                  <div className="flex justify-between">
                    <div className="input-field">
                      <label htmlFor="">Automerk</label>
                      <input type="text" placeholder="Vul automerk in" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="">Model</label>
                      <input type="text" placeholder="Model" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="">Kleur</label>
                      <input type="text" placeholder="Vul gewenste kleur in" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="">Max. km stand</label>
                      <input type="text" placeholder="vul een aantal in" />
                    </div>
                  </div>
                </div>
                <div className="form-third">
                  <div className="input-field">
                    <label htmlFor="">Aanvullende opmerkingen</label>
                    <textarea name="" id=""
                      placeholder="Eventuele extra wensen, belangrijke opties en/of opmerkingen kunnen hier ingevuld worden."></textarea>
                  </div>
                </div>
                <div className="submit-btn">
                  <button className="primary-btn arrow-btn grey-bg">Verzenden</button>
                </div>
              </div>
              <div className="contact-right-box">
                <div className="contact-right-inner orange-bg">
                  <span className="title">contact opnemen</span>
                  <ul>
                    <li>
                      <span>stuur een mail</span>
                      <span>info@cartelier.nl</span>
                    </li>
                    <li>
                      <span>bel ons</span>
                      <span>+31 (0) 548 234880</span>
                    </li>
                    <li>
                      <span>bezoek ons</span>
                      <span>Galvanistraat 15E, 7461 JC Rijssen</span>
                    </li>
                  </ul>
                </div>
                <div className="contact-right-inner grey-bg">
                  <span className="title">openingstijden</span>
                  <ul>
                    <li>
                      <span>Maandag – vrijdag</span>
                      <span>08:00 – 22:00</span>
                    </li>
                    <li>
                      <span>zaterdag</span>
                      <span>09:00 – 23:00</span>
                    </li>
                    <li>
                      <span>Feestdagen</span>
                      <span>10:00 – 20:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aanbod;