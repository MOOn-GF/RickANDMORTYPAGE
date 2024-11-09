import React from 'react'
import st from './Imge.module.css'
function Imge({url}) {
  return (
    <>
    <img className={st.img} src={url} alt="" />
    </>
  )
}

export default Imge