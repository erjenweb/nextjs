import React from 'react'
import FAQ from "@/components/page/faq";

function verkoopConsignatiePage() {
  return (
    <>
      <section className="about-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <div className="about-content">
              <h1 className="ft-48 white-text"><span className="orange-text">Verkoop in</span> consignatie</h1>
              <p className="ft-22 white-text">Zit u aan te denken om uw auto te gaan verkopen, maar ziet u op tegen de rompslomp? Laat ons dan uw auto verkopen! U kunt desgewenst in uw auto blijven rijden totdat een geïnteresseerde koper zich meld. </p>
              <a href="#" className="primary-btn orange-bg arrow-btn">Contact opnemen</a>
            </div>
            <div className="about-img">
              <img src="/assets/image/about-img.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-two verkoop-two">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="about-img-two relative">
              <img src="/assets/image/about-img-2.webp" alt="" />
              <img src="/assets/image/exclusive-img.webp" alt="" className="text-icon" />
            </div>
            <div className="about-content-two">
              <img src="/assets/image/about-two-icon.svg" alt="" />
              <h2 className="ft-48 text-white">focus op service,<br /> betrouwbaarheid <span className="orange-text">en
                een<br />
                goede prijs</span></h2>
            </div>
          </div>
        </div>
      </section>
      <section className="about-list verkoop-list-sec">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <div className="about-list-left">
              <p>Wij zoeken de parels op vier wielen in héél Europa! Dat hoeft niet alleen in Duitsland te
                zijn maar kan ook bijvoorbeeld
                diep in Zuid-Italië zijn. Wij in- en verkopen niet alleen maar verrichten ook gericht
                zoekwerk voor klanten met de wens
                naar een specifieke auto met bepaalde e/o gewenste optie(s)</p>
              <p>Inruilen van uw oude auto is geen enkel probleem. Wilt u langskomen voor een proefrit in één
                van onze occasions of
                om  een gerichte zoekopdracht met ons te bespreken? Maak dan een afspraak met ons. Ook kunt
                u onderstaand formulier
                invullen met uw naam en telefoonnummer, dan bellen wij u op om alles te bespreken. Een
                afspraak in de avonduren is ook
                mogelijk.</p>
              <p>Bel even voordat u langs wilt komen, dan staat de koffie voor u klaar!</p>
              <img src="/assets/image/man-and-woman-drinking-coffee-at-restaurant-busin-2025-03-26-12-15-22-utc 1.webp"
                alt="" />
            </div>
            <div className="verkoop-list">
              <div className="verkloop-inner-list">
              <h3 className="white-text">uw auto in de spotlight</h3>
              <p>Carteliér adverteert uw auto slim en efficiënt. Dankzij onze professionele aanpak verkoopt u sneller. Voor slechts €475 opstartkosten gaan wij direct voor u aan de slag. Deze kosten omvatten:</p>
              <ul className="dots-list">
                <li>Opstellen van advertenties + berekenen van prijs met aanvullende garantie Professionele fotoreportage van uw voertuig</li> 
                <li>Reinigen en oppoetsen van uw voertuig</li>
                <li>Plaatsen van uw voertuig op minimaal tien autowebsites voor drie maanden, voor maximaal bereik van potentiele klanten (Verlenging in overleg mogelijk)</li>
              </ul>
              </div>
               <div className="vision-content">
              <h3 className="ft-48 white-text"><span className="orange-text">Transparante</span><br /> succesfee</h3>
              <p>Bij het tot stand brengen van een succesvolle consignatie verkoop rekenen wij een succesfee van 8% over de totaal gerealiseerde verkoopprijs met een minimum van €1.000,-</p>
              <p>Nadat de koopovereenkomst is gesloten betaalt de koper het volledige verkoopbedrag aan u. Pas als u het bedrag heeft ontvangen bent u de overeengekomen provisie verschuldigd.</p>
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
      <section className="about-faq">
        <FAQ />
      </section>
    </>
  )
}

export default verkoopConsignatiePage
