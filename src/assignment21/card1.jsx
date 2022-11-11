import React from "react";
import styles from "./poster.module.css"   
function Card1(props){
    const {value}=props      
    return(
     <div className={styles.maindiv}>
        <div className={styles.poster} >
          <img src={value.Poster} alt="poster" ></img>  
        </div>
        <div>
          <h1 id={styles.title}>{value.Title}</h1>
        </div>
      </div> 
    )  
}
export default Card1