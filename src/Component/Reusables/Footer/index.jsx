import React from "react";
import styles from "./index.module.css"
import nexCentLogo from "./Logo.png"
import instagramLogo from "../../../assets/FooterImages/instagramIcon.png"
import facebookLogo from "../../../assets/FooterImages/FacebookIcon.png"
import twitterLogo from "../../../assets/FooterImages/TwitterIcon.png"
import youtubeLogo from "../../../assets/FooterImages/youtubeIcon.png"
import vector from "../../../assets/FooterImages/Vector.png"
import PageButton from "../PageButton";

const Footer = ()=>{
            return(
                <div className={styles.mainContent}>
                    <div className={styles.semiContent}>



                    <div className={styles.icon}>
                                    <img src={nexCentLogo} alt={"The NexCentLogo"}/>
                                    <footer style={{paddingTop :"1.5rem",color:"white"}}>Copyright © 2020 Nexcent ltd.
                                    <span style={{display:"block",paddingTop:"0.7rem"}}>
                                        All rights reserved</span></footer>
                    </div>
                            <div className={styles.socialIcons}>
                                    <img src={instagramLogo} alt={"An instagram logo."}/>
                                    <img src={facebookLogo} alt={"A faceBook logo."}/>
                                    <img src={twitterLogo} alt={"A twitter logo."}/>
                                    <img src={youtubeLogo} alt={"A youTube logo."}/>
                            </div>
                    </div>

                    <div className={styles.companyDiv}>
                                    <h3 ><bold >Company</bold></h3>
                                    <p>About us</p>
                                    <p>Blog</p>
                                    <p>Contact us</p>
                                    <p>Pricing</p>
                                    <p>Testimonials</p>
                    </div>

                    <div className={styles.supportDiv}>
                                    <h3 ><bold >Support</bold></h3>
                                    <p>Help center</p>
                                    <p>Terms of service</p>
                                    <p>Legal</p>
                                    <p>Privacy policy</p>
                                    <p>Status</p>
                                </div>


                    <div className={styles.stayUpDiv}>
                                    <h3>Stay up to date</h3>
                                    <img src={vector} alt={"Vector Logo"} className={styles.vectorIcon}/>
                                    <input type={"text"} placeholder={"Your email address..."} className={styles.input}/>

                    </div>
                </div>
            )
}
export  default  Footer;