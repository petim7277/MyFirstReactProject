import firstLogo from "../../../assets/HomPageImages/FirstLogo.svg";
import secondLogo from "../../../assets/HomPageImages/SecondLogo.png";
import thirdLogo from "../../../assets/HomPageImages/ThirdLogo.png";
import fourthLogo from "../../../assets/HomPageImages/FourthLogo.png";
import fifthLogo from "../../../assets/HomPageImages/FifthLogo.png";
import sixthLogo from "../../../assets/HomPageImages/SeventhLogo.png";
import seventhLogo from "../../../assets/HomPageImages/ThirdLogo.png";
import styles from "./index.module.css"

const OurClients = ()=>{
    return(
        <div className={styles.parentDiv}>
            <div>
                <div className={styles.childDiv}>
                    <h1>Our Clients</h1>
                    <p>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className={styles.siblingDiv}>
                    <img src={firstLogo} alt={"Company logo"}/>
                    <img src={secondLogo} alt={"Company logo"}/>
                    <img src={thirdLogo} alt={"Company logo"}/>
                    <img src={fourthLogo} alt={"Company logo"}/>
                    <img src={fifthLogo} alt={"Company logo"}/>
                    <img src={sixthLogo} alt={"Company logo"}/>
                    <img src={seventhLogo} alt={"Company logo"}/>

                </div>
            </div>
        </div>
    )
}
export default OurClients;
