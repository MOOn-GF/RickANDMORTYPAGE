import React from 'react'
import st from './Status.module.css'
function Status({text,indicate}) { 
    const chek = (x) =>{
        switch(x){
            case "Alive":
            return "green"
            case "Dead":
            return "red"
            case "unknown":
            return "grey"
               default:
                return "black"
        }
    }

    let styles = {
        backgroundColor: chek(indicate),
        width: '20px',
        height: '20px',
        marginRight: '10px',
        borderRadius: '50%'
     
    }
  return (
   
    <>
    <div className={st.statcube}>
       <div style={styles} ></div>  <p className={st.stat}>{text}</p>
         </div>
   
    </>
  )
}

export default Status