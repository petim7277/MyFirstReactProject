import  styles from "./index.module.css"
import webPic from  "./webpix.png"
import passwordIcon from  "./Vector.png"


const SignUp = ()=>{
 return(
     <div className={styles.mainDiv}>

            <div>
          <img src={webPic} alt={"web picture"} className={styles.imgDiv}/>
            </div>


          <div>
              <h2 style={{textAlign:"center",paddingTop:"2rem"}}>Welcome!</h2>
              <p style={{textAlign:"center"}}>sign up by entering the information below</p>
              <div className={styles.formDiv}>
              <input className={styles.inputFields} type={"text"} name={"firstName"} placeholder={"First Name"}/>
              <input className={styles.inputFields} type={"text"} name={"lastName"} placeholder={"Last Name"}/>
              <input className={styles.inputFields} type={"email"} name={"email"} placeholder={"Email"}/>
              <input className={styles.inputFields} type={"password"} name={"password"} placeholder={"password"} />
                  <img src={passwordIcon} alt={"Password icon"} className={styles.passwordLogo}/>
              </div>
              <p>Already have an Account?<strong  style={{color:"#55229E",paddingLeft:"1.5rem"}}>Login</strong></p>


              <button className={styles.button}>Sign up</button>

          </div>
     </div>
 )
}
export default  SignUp

