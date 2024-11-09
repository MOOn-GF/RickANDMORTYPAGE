import React from 'react'
import st from './Midler.module.css'
function Midler({children}) {
  return (
    <>
    <div className={st.mid}>{children}</div>
    </>
  )
}

export default Midler