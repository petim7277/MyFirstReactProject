import styles from "./index.module.css"
import logo from "./webpix.png"
import iForgotLogo from "./Vector-I.png"

const Login = ()=>{
    return(
            <div className={styles.mainDiv}>

                <div>
                    <img src={logo} alt={"description image"} className={styles.iconDiv}/>
                </div>


                <div className={styles.formDiv}>
                            <h2 style={{textAlign:"center",paddingTop:"2rem"}}>Welcome!</h2>
                            <p style={{textAlign:"center"}}>Log in to your Dashboard </p>

                                    <input className={styles.inputFields} type={"email"} name={"email"} placeholder={"         Email"}/>
                                    <input className={styles.inputFields} type={"password"} name={"password"} placeholder={"         Password"}/>
                    <div className={styles.info}>
                                <label style={{paddingTop:"1rem"}}>
                                    <input type={"checkbox"} value={"Remember me"} checked="checked"/>Remember me
                                </label>
                                <p><img src={iForgotLogo} className={styles.iLogo} alt={"A mini icon"}/>Forgot Password</p>
                    </div>

                    <button className={styles.buttons}><strong>Login</strong></button>

                    <div className={styles.signText}>
                            <p>Dont have an Account?   </p>
                            <p><strong >sign up</strong></p>
                    </div>

                </div>

            </div>
    )
}
export default Login;