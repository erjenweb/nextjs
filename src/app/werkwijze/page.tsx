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
    </>
  )
}

export default WerkwijzePage
