import React from 'react'
import LINK from '../UI/LINK/LINK'
import st from "./Nav.module.css"
import Logo from '../UI/Logo/Logo'
import Signin from '../UI/SignIN/SignIN'

function Nav() {
  return (
    <>
    <nav className={st.nav}>
        <Logo text="HObyHOrsers"></Logo>
        <ul className={st.list}>
            <li><LINK where="#" text="Home"></LINK>
            </li>
            <li><LINK  where="#" text="About us"></LINK></li>
            <li><LINK  where="#" text="HOBYHoRSing"></LINK></li>
        </ul>
       
        <Signin text="signin"></Signin>
    </nav>
    </>
  )
}

export default Nav