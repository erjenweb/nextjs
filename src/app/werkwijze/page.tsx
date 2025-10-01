import React from 'react'
import FAQ from "@/components/page/faq";

function WerkwijzePage() {
  return (
    <>
      <section className="werk-section">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="werk-content">
                        <h1 className="ft-48 white-text"><span className="orange-text">onze</span> werkwijze</h1>
                        <p className="ft-22 white-text">Bij Cartelier BV bieden wij twee mogelijkheden om u van dienst te
                            zijn: bemiddeling bij het vinden van uw droomauto óf
                            directe aankoop uit ons zorgvuldig geselecteerde aanbod. In beide gevallen staat kwaliteit,
                            transparantie en
                            persoonlijke aandacht centraal.</p>
                        <a href="#" className="primary-btn orange-bg arrow-btn">Contact opnemen</a>
                    </div>
                    <div className="werk-right">
                        <img src="/assets/image/contact-img.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
      <section className="werk-colums-section">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between werk-boxes">
                    <div className="werk-box flex">
                        <div className="werk-icon">
                            <img src="/assets/icons/search.svg" alt="" />
                        </div>
                        <div className="werk-content-box">
                            <h3 className="ft-32 white-text">Inventarisatie van wensen</h3>
                            <p>Wanneer u op zoek bent naar een specifieke auto, brengen wij uw wensen en eisen
                                uitgebreid in kaart. Denk aan merk,
                                model, uitvoering, budget en extra’s. Indien u een zoekopdracht heeft bespreken we
                                binnen 1 week uw wensen zodat we
                                direct kunnen starten met onze zoektocht voor u.</p>
                        </div>
                    </div>
                    <div className="werk-box flex">
                        <div className="werk-icon">
                            <img src="/assets/icons/car-side.svg" alt="" />
                        </div>
                        <div className="werk-content-box">
                            <h3 className="ft-32 white-text">Gerichte inkoop</h3>
                            <ul>
                                <li>Bemiddeling: wij zoeken binnen ons netwerk naar auto’s die perfect aansluiten op uw
                                    wensen.</li>
                                <li>Eigen aanbod: wij kopen zelfstandig auto’s in die voldoen aan onze hoge
                                    kwaliteitsstandaard en representatief zijn voor
                                    ons aanbod. Belangrijk voor ons is dat de auto’s eerlijk, betrouwbaar en
                                    dealeronderhouden zijn</li>
                            </ul>
                        </div>
                    </div>
                    <div className="werk-box flex">
                        <div className="werk-icon">
                            <img src="/assets/icons/screwdriver-wrench.svg" alt="" />
                        </div>
                        <div className="werk-content-box">
                            <h3 className="ft-32 white-text">Controle en voorbereiding</h3>
                            <p>Elke auto – of deze nu in bemiddeling of via onze eigen inkoop wordt aangeboden –
                                ondergaat een grondige technische en
                                optische controle. Eventuele verbeteringen worden direct, naar wens, uitgevoerd zodat de
                                auto in topstaat verkeert.</p>
                        </div>
                    </div>
                    <div className="werk-box flex">
                        <div className="werk-icon">
                            <img src="/assets/icons/car-on.svg" alt="" />
                        </div>
                        <div className="werk-content-box">
                            <h3 className="ft-32 white-text">Presentatie en advies</h3>
                            <p>Wij presenteren u de gevonden auto(’s) of tonen u direct ons actuele aanbod. U krijgt
                                hierbij altijd eerlijk en
                                deskundig advies.  </p>
                        </div>
                    </div>
                    <div className="werk-box flex">
                        <div className="werk-icon">
                            <img src="/assets/icons/key.svg" alt="" />
                        </div>
                        <div className="werk-content-box">
                            <h3 className="ft-32 white-text">Levering en overdracht</h3>
                            <p>De gekozen auto wordt rijklaar geleverd, inclusief documentatie en een duidelijke uitleg.
                                U kunt rekenen op een
                                zorgvuldige en persoonlijke overdracht. Indien de auto geimporteerd dient te worden
                                regelen wij het importproces en BPM
                                betaling. U zult hier niets van merken en wij ontzorgen hier volledig in.</p>
                        </div>
                    </div>
                    <div className="werk-box flex">
                        <div className="werk-icon">
                            <img src="/assets/icons/handshake-angle.svg" alt="" />
                        </div>
                        <div className="werk-content-box">
                            <h3 className="ft-32 white-text">Nazorg en service</h3>
                            <p>Ook na de aankoop blijft Cartelier BV uw aanspreekpunt. Of het nu gaat om advies,
                                onderhoudstips of toekomstige wensen:
                                wij staan voor u klaar!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WerkwijzePage
