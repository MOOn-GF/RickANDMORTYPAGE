import React from 'react'
import st from './Button.module.css'
function Buton({click,text}) {
  return (
   <>
   <button className={st.btn} onClick={click}>{text}</button>
   </>
  )
}

export default Buton