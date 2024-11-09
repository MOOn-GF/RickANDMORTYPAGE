import React from 'react'
import st from "./Logo.module.css"
function Logo({text}) {
  return (
    <>
   <div className={st.logo}>{text}</div>   
    </>
  )
}

export default Logo