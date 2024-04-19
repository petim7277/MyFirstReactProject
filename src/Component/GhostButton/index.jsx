import styles from "./index.module.css"

const GhostButton = ({textColor,backgroundColor,text})=>{
    return(
        <div>
            <button style={{background:backgroundColor,color:textColor}}className={styles.ghostButton}>
                {text}
            </button>
        </div>
    )
}

export default GhostButton
