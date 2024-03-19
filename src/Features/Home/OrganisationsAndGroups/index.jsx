import styles from "./index.module.css"
import firstLogo from "./FirstIcon.png"
import secondLogo from "./SecondIcon.png"
import thirdLogo from  "./ThirdIcon.png"
const OrganisationsAndGroups= ()=>{
                return(
                    <div className={styles.mainDiv}>
                          <div>
                      <img src={firstLogo} alt={"The first icon"}/>
                            <h2>Memberships<span style={{display:"block"}}>Organisations</span></h2>
                            <p style={{fontSize:"13px"}}>Our membership management</p>
                            <p style={{fontSize:"13px"}}>software provides full automation of</p>
                            <p style={{fontSize:"13px"}}>membership renewals and payments</p>
                          </div>
                          <div>
                                <img src={secondLogo} alt={"The second icon"}/>
                                <h2>National<span style={{display:"block"}}>Associations</span></h2>
                                <p style={{fontSize:"13px"}}>Our membership management</p>
                                <p style={{fontSize:"13px"}}>software provides full automation of</p>
                                <p style={{fontSize:"13px"}}>membership renewals and payments</p>

                          </div>
                          <div>
                                <img src={thirdLogo} alt={"The third icon"}/>
                                <h2>Clubs And<span style={{display:"block"}}>Groups</span></h2>
                                <p style={{fontSize:"13px"}}>Our membership management</p>
                                <p style={{fontSize:"13px"}}>software provides full automation of</p>
                                <p style={{fontSize:"13px"}}>membership renewals and payments</p>
                          </div>
                    </div>



                )
}
export default OrganisationsAndGroups;