'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface IFormInput {
  firstName: string,
  email: string,
  telefoonnummer: string,
  automerk: string,
  model: string,
  kleur: string,
  opmerkingen: string,

}
function Contact() {
  const router = useRouter();
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    router.refresh();
  };


  return (
    <section className="contact-section pd-70">
      <div className="contact-inner">
        <div className="max-w-7xl mx-auto">
          <div className="contact-heading flex items-end justify-between">
            <h3 className="size-48 dark-text"><span className="orange-text">we helpen grAAg</span><br /> met de
              zoektocht
            </h3>
            <p>Heeft u vragen of zoekt u een specifieke auto? Vul het formulier in en ons team neemt
              persoonlijk
              contact met u op om u
              verder te helpen.</p>
          </div>
          <div className="flex justify-between">
            <div className="contact-form">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-first">
                <span className="title">persoonlijke gegevens</span>
                <div className="flex justify-between">
                  <div className="input-field">
                    <label htmlFor="firstName">Volledige naam</label>
                    <input id='firstName' type="text" placeholder="Hoe mogen we je noemen"
                           { ...register("firstName", { required: true })}
                           aria-invalid={errors.firstName ? "true" : "false"} />
                    {errors.firstName?.type === "required" && (
                        <span className="mx-3 text-sm text-red-500">Dit is een verplicht.</span>
                    )}
                  </div>
                  <div className="input-field">
                    <label htmlFor="email">E-mailadres</label>
                    <input id='email' type="text" placeholder="vul je e-mailadres in"
                           { ...register("email", { required: true })}
                           aria-invalid={errors.email ? "true" : "false"} />
                    {errors.email?.type === "required" && (
                        <span className="mx-3 text-sm text-red-500">Dit is een verplicht.</span>
                    )}
                  </div>
                  <div className="input-field">
                    <label htmlFor="telefoonnummer">Telefoonnummer</label>
                    <input id={"telefoonnummer"} type="text" placeholder="Je telefoonnummer"
                           { ...register("telefoonnummer", { required: true })}
                           aria-invalid={errors.telefoonnummer ? "true" : "false"} />
                    {errors.telefoonnummer?.type === "required" && (
                        <span className="mx-3 text-sm text-red-500">Dit is een verplicht.</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-second">
                <span className="title">gegevens zoekopdracht</span>
                <div className="flex justify-between">
                  <div className="input-field">
                    <label htmlFor="automerk">Automerk</label>
                    <input id={"automerk"} type="text" placeholder="Vul automerk in"
                           { ...register("automerk", { required: true })}
                           aria-invalid={errors.automerk ? "true" : "false"} />
                    {errors.automerk?.type === "required" && (
                        <span className="mx-3 text-sm text-red-500">Dit is een verplicht.</span>
                    )}
                  </div>
                  <div className="input-field">
                    <label htmlFor="model">Model</label>
                    <input id={"model"} type="text" placeholder="Model"
                           { ...register("model", { required: true })}
                           aria-invalid={errors.model ? "true" : "false"} />
                    {errors.model?.type === "required" && (
                        <span className="mx-3 text-sm text-red-500">Dit is een verplicht.</span>
                    )}
                  </div>
                  <div className="input-field">
                    <label htmlFor="kleur">Kleur</label>
                    <input type="text" placeholder="Vul gewenste kleur in"
                           { ...register("kleur", { required: true })}
                           aria-invalid={errors.kleur ? "true" : "false"} />
                    {errors.kleur?.type === "required" && (
                        <span className="mx-3 text-sm text-red-500">Dit is een verplicht.</span>
                    )}
                  </div>
                  <div className="input-field">
                    <label htmlFor="">Max. km stand</label>
                    <input type="text" placeholder="vul een aantal in" />
                  </div>
                </div>
              </div>
              <div className="form-third">
                <div className="input-field">
                  <label htmlFor="opmerkingen">Aanvullende opmerkingen</label>
                  <textarea id="opmerkingen"
                    placeholder="Eventuele extra wensen, belangrijke opties en/of opmerkingen kunnen hier ingevuld worden."      { ...register("opmerkingen", { required: true })}
                            aria-invalid={errors.opmerkingen ? "true" : "false"} >
                </textarea>
                  {errors.opmerkingen?.type === "required" && (
                      <span className="mx-3 text-sm text-red-500">Dit is een verplicht.</span>
                  )}
                </div>
              </div>
              <div className="submit-btn">
                <button type="submit" className="primary-btn arrow-btn grey-bg">Verzenden</button>
              </div>
              </form>
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
                    <span>Maandag – zaterdag</span>
                    <span>08:00 – 17:00</span>
                  </li>
                  <li>
                    <span>Zondag Gesloten</span>
                    <span>09:00 – 23:00</span>
                  </li>
                  <li>
                    Wij werken enkel op afspraak, belt u even voordat u langs wilt komen? De koffie staat dan voor u klaar. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
