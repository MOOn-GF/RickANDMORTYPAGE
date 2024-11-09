import React from 'react'
import st from './Gender.module.css'

function Gender({text}) {
  return (
    <>
    <h2 className={st.gen}>Gender:{text}</h2>
    </>
  )
}

export default Gender