import Image from "next/image"

function Megamenu(){
    return(
        <>
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src="/assets/image/bannr_video.mp4" type="video/mp4" /> 
                        Your browser does not support the video tag. 
                    </video> 
                    <div className="max-w-7xl mx-auto"> 
                        <div className="flex items-center justify-between"> 
                            <div className="menu-left"> 
                                <ul> 
                                    <li><span>Wie we zijn</span><br /><a href="#" className="block ft-48 white-text carla">Over 
                                            ons</a> 
                                    </li> 
                                    <li><span>Ons aanbod</span><br /><a href="#" 
                                            className="block ft-48 white-text carla">collectie</a> 
                                    </li> 
                                    <li><span>Hoe we het doen</span><br /><a href="#" 
                                            className="block ft-48 white-text carla">Werkwijze</a> 
                                    </li> 
                                    <li><span>Bereik ons</span><br /><a href="#" className="block ft-48 white-text carla">contact</a> 
                                    </li> 
                                </ul> 
                            </div> 
                            <div className="menu-right"> 
                                <div className="menu-right-top flex items-end"> 
                                    <h2 className=" ft-48 white-text"><span className="orange-text">uitgelichte</span> <br />occassions 
                                    </h2> 
                                    <a href="#" className="primary-btn orange-bg arrow-btn">bekijk al het aanbod</a> 
                                </div> 
                                <div className="occations-list flex justify-between"> 
                                    <div className="occations-box"> 
                                        <a href="#"> 
                                            <img src="/assets/image/serjan-midili-8iZdhhP5bwg-unsplash.webp" alt="" /> 
                                            <h3 className="white-text">Nissan<br /> Altima</h3> 
                                        </a> 
                                    </div> 
                                    <div className="occations-box"> 
                                        <a href="#"> 
                                            <img src="/assets/image/serjan-midili-8iZdhhP5bwg-unsplash.webp" alt="" /> 
                                            <h3 className="white-text">Nissan<br /> Altima</h3> 
                                        </a> 
                                    </div> 
                                    <div className="occations-box"> 
                                        <a href="#"> 
                                            <img src="/assets/image/serjan-midili-8iZdhhP5bwg-unsplash.webp" alt="" /> 
                                            <h3 className="white-text">Nissan<br /> Altima</h3> 
                                        </a> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                    <div className="menu-bottom"> 
                        <div className="max-w-7xl mx-auto"> 
                            <div className="flex items-center"> 
                                <ul className="contact-info flex"> 
                                    <li><a href="#">+31 (0) 548 234880</a></li> 
                                    <li><a href="#">info@cartelier.nl</a></li> 
                                </ul> 
                                <ul className="social-icon flex"> 
                                    <li><a href="#" className="facebook"><img src="/assets/icons/facebook.svg" alt="" /> </a></li> 
                                    <li><a href="#" className="linkedin"><img src="/assets/icons/linkedin.svg" alt="" /> </a></li> 
                                    <li><a href="#" className="insta"><img src="/assets/icons/instagram.svg" alt="" /> </a></li> 
                                    <li><a href="#" className="youtube">
                                        <img src="/assets/icons/youtube.svg" alt="" /> </a></li> 
                                </ul> 
                            </div> 
                        </div> 
                    </div> 
                </>
    );
    
}

export default Megamenu;