import React from "react";
import nexCentLogo from "../../../assets/NavBarImage/Logo.svg"
import styles from "./index.module.css"
import PageButton from "../PageButton";
import GhostButton from "../../GhostButton";

const NavBar = ()=>{
    return(
    <div className={styles.mainContent}>
        <div className={styles.icon}>
                <img src={nexCentLogo} alt={"NexCent Logo icon"}/>
        </div>
        <div className={styles.linkContent}>
                <p>Home</p>
                <p>Service</p>
                <p>Feature</p>
                <p>Product</p>
                <p>Testimonial</p>
                <p>FAQ</p>
        </div>

        <div className={styles.buttons}>
                 <GhostButton textColor={"#4CAF4F"} backgroundColor={"#FFF"} text={"Login"}/>
                <PageButton textColor={"#FFF"} backgroundColor={"#4CAF4F"} text={"Sign up"}/>
        </div>

    </div>


    )
}
export default NavBar