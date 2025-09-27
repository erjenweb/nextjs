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
                <span className="ft-32 white-text carla">Filteren</span>
                <select name="" id="" className="appearance-none">
                  <option value="">selecteer merk</option>
                  <option value="">selecteer merk 1</option>
                  <option value="">selecteer merk 2</option>
                  <option value="">selecteer merk 3</option>
                </select>
              </div>
              <div className="filter flex items-center">
                <span className="ft-32 white-text carla">Filteren</span>
                <select name="" id="" className="appearance-none">
                  <option value="">selecteer merk</option>
                  <option value="">selecteer merk 1</option>
                  <option value="">selecteer merk 2</option>
                  <option value="">selecteer merk 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collections-post">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start columns-3 gap-26 post-row">

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
                  <a href="#" className="primary-btn arrow-btn orange-bg">dien een aanvraag in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section pd-70">
        <div className="contact-inner">
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