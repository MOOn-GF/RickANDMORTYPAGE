import React from 'react'
import st from "./Signin.module.css"

function Signin({text}) {
  return (
    <>
    <div className={st.sign}>{text}</div>
    </>
  )
}

export default Signin