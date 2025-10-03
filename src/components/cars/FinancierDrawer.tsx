'use client'
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Car from "@/service/carEntity";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

interface FinancierDrawerProps {
    car: Car;
}
interface FinanceFormInput {
    productPrice:number,
    finalTerm:number
}

export default function FinancierDrawer({car}:FinancierDrawerProps) {
    const router = useRouter();
    const { register, formState: { errors }, handleSubmit } = useForm<FinanceFormInput>();

    const [isOpen,setIsOpen] = useState(false);

    const onSubmit: SubmitHandler<FinanceFormInput> = (data) => {
        setIsOpen(false)
        router.refresh();
    };

    return (
<>
    <div className="info-fixed-box">
        <div className="flex items-center radius-40 justify-between">
            <div className="model flex items-center">
                <Image height="100" width="100" src="/assets/icons/bmw-logo.svg" alt="" />
                <h1 className="text-white uppercase carla">{car?.merk} {car?.model}</h1>
            </div>
            <div className="buttons flex items-center">
                <div className="orange-btn">
                    <a href="#"
                       className="px-6 py-2 bg-brand-orange text-white rounded-full cursor-pointer bg-orange-600 transition-colors mr-5">Plan
                        een proefrit</a>
                </div>

                <div className="white-btn">
                    <Link href="#" onClick={()=>setIsOpen(true)}
                       className="px-6 py-2 bg-transparent border border-white text-white rounded-full transition-colors flex items-center gap-2">Financieringsopties</Link>
                </div>
            </div>
        </div>
    </div>

        <div
            className={
                "z-100  fixed h-100vh w-30 overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " p-3 w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out group-data-closed/dialog-panel:opacity-0 sm:-ml-10 sm:pr-4">
                    <button type="button" onClick={() => setIsOpen(false)} className=" w-[30px] h-[30px] relative rounded-md text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" aria-expanded="true">
                        <span className="absolute -inset-2.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div data-financer-logo="https://occasions.mobilox.nl/build/img/partner-logos/lease.auto.png" data-geldlenenkostgeld="https://occasions.mobilox.nl/build/img/geldlenenkostgeld.jpg" data-settings="{&quot;bgColor&quot;:&quot;#F1F7FE&quot;,&quot;textColor&quot;:&quot;#000000&quot;,&quot;headerTextColor&quot;:&quot;&quot;,&quot;collabTextColor&quot;:&quot;#000000&quot;,&quot;laUspTextColor&quot;:&quot;#000000&quot;,&quot;width&quot;:&quot;auto&quot;,&quot;btnTextColor&quot;:&quot;#ffffff&quot;,&quot;btnBgColor&quot;:&quot;#2338BD&quot;,&quot;backBtnTextColor&quot;:&quot;#FFFFFF&quot;,&quot;backBtnBgColor&quot;:&quot;#5c5a5a&quot;,&quot;formTarget&quot;:&quot;https:\/\/occasions.mobilox.nl\/3125494-cartelier-bv\/5192772-bmw-3-serie-touring-330e&quot;,&quot;financerUrl&quot;:&quot;https:\/\/lease.auto&quot;,&quot;images&quot;:{&quot;financerLogo&quot;:&quot;https:\/\/occasions.mobilox.nl\/build\/img\/partner-logos\/lease.auto.png&quot;,&quot;geldLenenKostGeld&quot;:&quot;https:\/\/occasions.mobilox.nl\/build\/img\/geldlenenkostgeld.jpg&quot;},&quot;product&quot;:{&quot;id&quot;:5192772,&quot;taxType&quot;:&quot;Incl. BTW&quot;,&quot;category&quot;:{&quot;name&quot;:&quot;Auto's&quot;,&quot;devCode&quot;:&quot;VOERTUIGEN_AUTO&quot;,&quot;slug&quot;:&quot;auto-s&quot;,&quot;children&quot;:null},&quot;isVan&quot;:false,&quot;price&quot;:38625,&quot;financing&quot;:{&quot;financer&quot;:&quot;lease.auto&quot;},&quot;restbpm&quot;:0}}" id="mox-financing-calculator" data-v-app="">
                    <div className="mox-calculator mox-bootstrap w-auto text-[#000000] bg-[#F1F7FE]" >
                        <div className="mox-financing-description" >
                            <b className="mb-1 block font-bold" >Bereken je Financial lease of Autofinanciering</b>
                            <p className="mb-4 text-gray-500" >Bereken hieronder je financiering en vraag vrijblijvend een offerte aan.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="rounded mox-calculator-wrapper p-3 mb-3 bg-white" >
                            <div  style={{display: "none"}}>
                                <div className="p-4 mb-4  text-red-700 bg-red-100 rounded-lg" role="alert" ></div>
                            </div>


                                <div className="flex items-center justify-between" >
                                    <div className="flex items-center w-1/2 mr-0" >
                                        <input className="checked:bg-emerald-400 checked:hover:bg-emerald-400 checked:active:bg-emerald-400 checked:focus:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400" type="radio"  id="isBusiness1" value="Zakelijk" />

                                            <label className="ml-2  font-medium text-gray-700" htmlFor="isBusiness1" >Ik ben ondernemer</label>
                                    </div>
                                    <div className="flex items-center flex-grow" >
                                        <input className="checked:bg-emerald-400 checked:hover:bg-emerald-400 checked:active:bg-emerald-400 checked:focus:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400" type="radio" name="isBusiness" id="isBusiness2" value="Particulier"  />
                                            <label className="ml-2  font-medium text-gray-700" htmlFor="isBusiness2" >Ik ben in loondienst</label>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-0" >
                                    <div className="flex items-center w-1/2" >
                                        <input className="checked:bg-emerald-400 checked:hover:bg-emerald-400 checked:active:bg-emerald-400 checked:focus:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400" type="radio" name="dealerVisited" id="dealerVisited1" value="true"  />
                                            <label className="ml-2  font-medium text-gray-700" htmlFor="dealerVisited1" >Ik heb de auto dealer al bezocht</label>
                                    </div>
                                    <div className="flex items-center w-1/2" >
                                        <input className="checked:bg-emerald-400 checked:hover:bg-emerald-400 checked:active:bg-emerald-400 checked:focus:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400" type="radio" name="dealerVisited" id="dealerVisited2" value="false"  />
                                            <label className="ml-2  font-medium text-gray-700" htmlFor="dealerVisited2" >Ik heb de auto dealer <b className="font-bold" >nog niet</b> bezocht</label>
                                    </div>
                                </div>

                                <div >
                                    <hr className="border-t border-gray-300 my-2"  />
                                </div>

                                <div className="flex justify-between items-center" >
                                    <label htmlFor="btw" className="form-label flex items-center space-x-1  font-medium text-gray-700" >
                                        <span>BTW</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-toggle="tooltip" data-placement="right"  data-v-0938a7e6=""  data-original-title="Deze auto is een BTW-auto. De BTW dient als aanbetaling voldaan te worden." className="w-4 h-4 text-blue-600">
                                            <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" data-v-0938a7e6=""></path>
                                        </svg>
                                    </label>
                                    <input type="text"  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" id="btw"  />
                                </div>

                                <div className="flex justify-between items-center" >
                                    <label htmlFor="productPrice" className="form-label  font-medium text-gray-700" >Aankoopbedrag</label>
                                    <input type="text"  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" id="productPrice"  />
                                </div>

                                <div className="flex items-center justify-between mb-2" >
                                    <label htmlFor="deposit" className="form-label  font-medium text-gray-700" >Aanbetaling/inruil</label>
                                    <div className="flex w-1/2" >
                                        <span className="flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md" >€</span>
                                        <input type="number" className="block w-full rounded-none rounded-r-md border-gray-300 shadow-sm focus:border-[#2338BD] focus:ring-[#2338BD] " id="productPrice" placeholder="0"
                                               { ...register("productPrice", { required: true })}
                                               aria-invalid={errors.productPrice ? "true" : "false"} />


                                    </div>
                                </div>
                            {errors.productPrice?.type === "required" && (
                                <p className="mx-3 text-sm text-red-500">Dit is een verplicht.</p>
                            )}

                                <div className="flex items-center justify-between" >
                                    <label htmlFor="finalTerm" className="form-label flex items-center space-x-1  font-medium text-gray-700" >
                                        <span>Slottermijn</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-toggle="tooltip" data-placement="right"  data-v-0938a7e6=""  data-original-title="De slottermijn is een bedrag wat je aan het einde van de financieringsperiode in een keer betaalt. Over dit bedrag betaal je geen aflossing waardoor de maandelijkse kosten lager zijn." className="w-4 h-4 text-blue-600">
                                            <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" data-v-0938a7e6=""></path>
                                        </svg>
                                    </label>
                                    <div className="flex w-1/2" >
                                        <span className="flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md" >€</span>
                                        <input type="number" className="block w-full rounded-none rounded-r-md border-gray-300 shadow-sm focus:border-[#2338BD] focus:ring-[#2338BD] " id="finalTerm" placeholder="€"
                                               { ...register("finalTerm", { required: true })}
                                               aria-invalid={errors.finalTerm ? "true" : "false"} />

                                    </div>

                                </div>
                            {errors.finalTerm?.type === "required" && (
                                <p className="mx-3 text-sm text-red-500">Dit is een verplicht.</p>
                            )}

                                <div className="flex items-center justify-between" >
                                    <label htmlFor="totalLoanAmount" className="form-label  font-medium text-gray-700" >Totaal financieringsbedrag</label>
                                    <input type="text"  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" id="totalLoanAmount"  />
                                </div>

                                <div className="flex items-center justify-between" >
                                    <label className="form-label  font-medium text-gray-700" htmlFor="duration" >Looptijd</label>
                                    <select id="duration" className="block w-1/2 py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-[#2338BD] focus:border-[#2338BD] sm:text-sm rounded-md"  >
                                        <option value="24" >24 maanden</option>
                                        <option value="36" >36 maanden</option>
                                        <option value="48" >48 maanden</option>
                                        <option value="60" >60 maanden</option>
                                        <option value="72" >72 maanden</option>
                                    </select>
                                </div>

                                <div >
                                    <hr className="border-t border-gray-300 my-2"  />
                                </div>

                                <div className="flex items-center justify-between" >
                                    <label htmlFor="monthlyCost" className="form-label font-bold  text-gray-700" >Maandlasten</label>
                                    <input type="text"  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 font-bold" id="monthlyCost"  />
                                </div>
                           
                        </div>

                        <div className="flex" >
                            <button type={'submit'} className="mox-btn w-full p-2 mb-3 rounded text-white bg-[#2338BD] hover:bg-[#1a2c9c] transition-colors" role="button"  >
                                <b className="font-bold" >Gratis offerte aanvragen</b>
                                <i className="fas fa-arrow-right float-right mt-1" ></i>
                            </button>
                        </div>
    </form>

                        <div className="flex flex-col space-y-3 mox-financer mb-3 mt-3" >
                            <div className="mox-financer-usps space-y-1" >
                                <div className="la-usp flex items-center space-x-2  text-[#000000]" >
                                    <div className="la-check-wrapper flex-shrink-0" >
                                        <svg className="la-check w-4 h-4 text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  >
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" ></path>
                                        </svg>
                                    </div>
                                    <span className="la-usp-text" >Zakelijk en particulier alle leasevormen</span>
                                </div>
                                <div className="la-usp flex items-center space-x-2  text-[#000000]" >
                                    <div className="la-check-wrapper flex-shrink-0" >
                                        <svg className="la-check w-4 h-4 text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  >
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" ></path>
                                        </svg>
                                    </div>
                                    <span className="la-usp-text" >Binnen 24 uur een offerte</span>
                                </div>
                                <div className="la-usp flex items-center space-x-2  text-[#000000]" >
                                    <div className="la-check-wrapper flex-shrink-0" >
                                        <svg className="la-check w-4 h-4 text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  >
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" ></path>
                                        </svg>
                                    </div>
                                    <span className="la-usp-text" >Beste deal door vergelijking van 40 aanbieders</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2" >
                                <a href="https://lease.auto" className="mox-financer-link  text-gray-700 hover:text-[#2338BD] transition-colors" target="_blank"  >
                                    <span >In samenwerking met:</span>
                                </a>
                                <a href="https://lease.auto" target="_blank" >
                                    <img src="https://occasions.mobilox.nl/build/img/partner-logos/lease.auto.png" alt="lease.auto logo" className="h-6"  />
                                </a>
                            </div>
                        </div>

                        <div className="flex" >
                            <img className="max-w-full h-auto" src="https://occasions.mobilox.nl/build/img/geldlenenkostgeld.jpg" alt="Geld lenen kost geld"  />
                        </div>
                    </div>
                </div>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </div>
</>
    );
}