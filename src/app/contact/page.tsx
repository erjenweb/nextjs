import React from 'react'

function ContactPage() {
  return (
    <>
      <section className="contact-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="contact-content">
              <h1 className="ft-48 white-text"><span className="orange-text">Kom in</span> contact</h1>
              <p className="ft-22 white-text">Ons team staat klaar om al uw vragen te beantwoorden en u
                persoonlijk te adviseren. Samen
                vinden we de auto die perfect
                aansluit bij uw wensen.</p>
              <div className="buttons flex">
                <a href="#" className="primary-btn orange-bg phone-icon">+31 (0) 548 234880</a>
                <a href="#" className="primary-btn orange-bg email-icon">info@cartelier.nl</a>
              </div>
              <p className="ft-22 white-text">Galvanistraat 15E, 7461 JC Rijssen</p>
            </div>
            <div className="contact-right">
              <img src="/assets/image/contact-img.webp" alt="" />
              <img src="/assets/image/contact-text-icon.svg" alt="" className="ct-text-icon" />
              <a href="#" className="primary-btn grey-bg arrow-btn">plan een bezichtiging</a>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-page-form">
        <div className="max-w-7xl mx-auto">
          <div className="contact-inner-full">
            <h2 className="ft-48 white-text"><span className="orange-text">Stel je</span> vraag</h2>
            <div className="form-inner radius-40 white-bg">
              <h3 className="ft-24 dark-text">persoonlijke gegevens</h3>
              <div className="flex form-row">
                <div className="input-field">
                  <label htmlFor="">Volledige naam</label>
                  <input type="text" placeholder="Hoe mogen we je noemen" />
                </div>
                <div className="input-field">
                  <label htmlFor="">Telefoonnummer</label>
                  <input type="text" placeholder="Je telefoonnummer" />
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="">E-mailadres</label>
                <input type="email" placeholder="Je telefoonnummer" />
              </div>
              <div className="input-field">
                <label htmlFor="">Stel je vraag</label>
                <textarea placeholder="Hoe mogen we je noemen"></textarea>
              </div>
              <div className="submit-btn">
                <button className="primary-btn arrow-btn grey-bg">Verzenden</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage