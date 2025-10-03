import React from 'react'
import FAQ from "@/components/page/faq";

function GarantiesPage() {
  return (
    <>
      <section className="werk-section">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="werk-content">
                        <h1 className="ft-48 white-text"><span className="orange-text">onze</span> garanties</h1>
                        <p className="ft-22 white-text">Carteliér B.V. heeft haar garantie(s) ondergebracht bij Autotrust.
                            Zo hoeft u, bij een defect, niet speciaal naar ons te
                            komen maar kunt u in heel Europa terecht bij gerenommeerde aangesloten reparateurs. Bij de
                            aankoop van uw auto regelen
                            wij voor u de aanvraag via Autotrust.</p>
                        <p className="ft-22 white-text">Zo wordt u dichtbij huis én in Europa ontzorgd. Ondanks onze
                            zorgvuldige selectie kan er
                            altijd een defect ontstaan.
                            Meld deze eenvoudig online via mijn.autotrust.nl</p>
                        <a href="#" className="primary-btn orange-bg arrow-btn">Contact opnemen</a>
                    </div>
                    <div className="werk-right">
                        <img src="/assets/image/guaranties-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="werk-list-section">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="werk-list-col">
                        <h3 className="ft-32 white-text">Autotrust garanties</h3>
                        <p className="ft-22">De garanties zijn gebaseerd op de leeftijd, kilometerstand en de uitvoering van
                            de auto. Met
                            een Autotrust garantie
                            krijgt u 6,12 of zelfs 24 maanden garantie. 
                            Hierbij een overzicht van de verschillende garantiedekkingen: </p>
                        <ul className="dots-list">
                            <li>Autotrust Instap: dit is de beste keuze voor auto’s tot 16 jaar en 200.000 km.</li>
                            <li>Autotrust Uitgebreid: dit is de beste keuze voor auto’s tot 8 jaar en 150.000 km.</li>
                            <li>Luxury & Performance: een garantie speciaal ontwikkeld voor exclusieve auto’s.</li>
                            <li>Accugarantie: een add-on (af te sluiten in combinatie met een Instap of Uitgebreid
                                garantie) speciaal ontwikkeld voor
                                elektrische en hybride voertuigen tot 8 jaar en 150.000 km waarbij de aandrijfaccu`s ook
                                onder de dekking vallen*</li>
                        </ul>
                    </div>
                    <div className="werk-list-col">
                        <h3 className="ft-32 white-text">Instapgarantie</h3>
                        <p className="ft-22">De Instapgarantie van Autotrust biedt zekerheid op de meest kostbare onderdelen
                            van de auto
                        </p>
                        <ul className="arrow-list">
                            <li>Transmissie</li>
                            <li>Aandrijving</li>
                            <li>Het koelsysteem</li>
                            <li>Het brandstofsysteem</li>
                            <li>Emissiesysteem</li>
                        </ul>
                        <a href="/assets/image/autotrust-instap-garantie-2024.pdf" className="primary-btn orange-bg arrow-download" download>download voorwaarden</a>
                        <p className="ft-22">Prijs op aanvraag</p>
                    </div>
                    <div className="werk-list-col">
                        <h3 className="ft-32 white-text">Uitgebreide Garantie</h3>
                        <p className="ft-22">Deze garantie biedt de meest uitgebreide dekking: nagenoeg alle mechanische en
                            elektronische
                            onderdelen van de auto valt
                            onder de garantie</p>
                        <ul className="arrow-list">
                            <li>Alle onderdelen van de instapgarantie</li>
                            <li>Remsysteem</li>
                            <li>Wielophanging</li>
                            <li>Airbag</li>
                            <li>Elektronica *</li>
                            <li>Airconditioning</li>
                        </ul>
                        <p className="ft-18 text-white">*Multimedia is geen onderdeel van de garantie </p>
                        <a href="/assets/image/autotrust-uitgebreid-garantie-2024.pdf" className="primary-btn orange-bg arrow-download" download>download voorwaarden</a>
                        <p className="ft-22 text-white">Prijs op aanvraag </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default GarantiesPage
