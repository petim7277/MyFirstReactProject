import styles from "./index.module.css"
import PageButton from "../../../Component/Reusables/PageButton";
import heroPic from "../../../Features/Home/HeroSection/HeroImage.svg"
import ellipsis1 from "../HeroSection/Ellipse 5.png"
import ellipsis2 from "../HeroSection/Ellipse 6.png"
import ellipsis3 from "../HeroSection/Ellipse 7.png"



const HeroSection = ()=>{
            return(
                <div className={styles.heroDiv}>
                    <div className={styles.heroText}>
                                <h1>Lessons and insights<span style={{display:"block",color:"#4CAF4F"}}>
                                    from 8 years
                        </span></h1>
                                <p>Where to grow your business as a photographer: site or social media?</p>
                        <div className={styles.heroButton}>
                                <PageButton textColor={"#FFFFFF"} backgroundColor={"#4CAF4F"} text={"Register"}/>
                        </div>
                    </div>

                    <div >
                                <img src={heroPic} alt={"Home Hero image"}/>
                    </div>

                </div>
                    // <div className={styles.heroEllipsis}>
                    //     <img src={ellipsis1} alt={"An ellipsis"}/>
                    //     <img src={ellipsis2} alt={"An ellipsis"}/>
                    //     <img src={ellipsis3} alt={"An ellipsis"}/>
                    // </div>
            )

}
export default HeroSection;