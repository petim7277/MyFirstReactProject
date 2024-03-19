import  style from "./index.module.css"
import  secondHeroImage from "./secondHeroImage.png"
import PageButton from "../../../Component/Reusables/PageButton";

const  SecondHeroSection = ()=>{
                    return(
                        <div className={style.mainDiv}>
                            <div>
                            <img src={secondHeroImage} alt={"The second Hero image"}/>
                            </div>
                            <div>
                                <h1>The unseen of spending three<span style={{display:"block"}}> years at Pixelgrade</span></h1>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed</p>
                                <p >accumsanquam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed</p>
                                <p >porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam</p>
                                <p >quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                                <PageButton textColor={{color:"#FFA"}}  backgroundColor={"#4CAF4F"}text={"Learn More"} />
                            </div>

                        </div>
                    )
}
export default SecondHeroSection;