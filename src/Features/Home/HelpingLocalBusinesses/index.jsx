import styles from "./index.module.css"
import firstLogo from "./FirstIcon.png"
import secondLogo from "./SecondIcon.png"
import thirdLogo from "./ThirdIcon.png"
import fourthLogo from "./FourthIcon.png"


const HelpingLocalBusinesses = ()=>{
            return(
                <div className={styles.mainDiv}>

                <div className={styles.semiDiv}>
                    <h1>Helping a local<span style={{display:"block",color:"#4CAF4F"}}> business reinvent itself</span></h1>
                    <p style={{fontSize: "15px"}}>We reached here with our hard work and dedication</p>
                </div>

                    <div className={styles.semiMainDiv}>

                     <div className={styles.firstDiv}>

                     <img src={firstLogo} alt={"The first icon"}/>
                    <p><span style={{fontSize:"25px",fontWeight:"bolder"}}>2,245,341</span><span
                        style={{display:"block",fontSize:"3px"}}></span>Members</p>


                     </div>
                    <div/>




                </div>
                </div>
            )
}

export default HelpingLocalBusinesses