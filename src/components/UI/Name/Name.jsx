import React from 'react'
import st from './Name.module.css'
function Name({text}) {
  return (
    <>
    <h1 className={st.name}>{text}</h1>
    </>
  )
}

export default Name