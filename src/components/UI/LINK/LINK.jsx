import React from 'react'
import st from "./Link.module.css"

function LINK({where,text,}) {
  return (
    <>
    <a className={st.link} href={where}>{text}</a></>
  )
}

export default LINK