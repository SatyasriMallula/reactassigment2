import React, { useState } from "react";
import Card1 from "./card1";
import styles from "../assignment21/card.module.css"

function Card(props){
    const {value1}=props
    console.log(value1)
    const[search,setSearch]=useState('')
    return(
        <div>
            <div className={styles.inputdiv}>
               
            
           <div> <input id={styles.input} placeholder="Search For The Movie Here..." value={search} onChange={(e)=>setSearch(e.target.value)} ></input></div>
             <div id={styles.movies}><h1>Movies</h1></div>
            </div>
          
            <div className={styles.card} >
           {
            value1.Search.filter(title=>title.Title.toLowerCase().includes(search.toLowerCase())).map(value=><Card1 value={value}/>)
           }
           </div>
        </div>
    )
}
export default Card