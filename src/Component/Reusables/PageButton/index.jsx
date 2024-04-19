import styles from "./index.module.css"

const PageButton = ({textColor,backgroundColor,text})=>{
    return(
      <div>
          <button style={{background:backgroundColor,color:textColor}}className={styles.button}>
              {text}
          </button>
      </div>

    )
}
 export default PageButton

