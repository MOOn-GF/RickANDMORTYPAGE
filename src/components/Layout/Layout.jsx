import React from 'react'
import Nav from '../Nav/Nav'

function Layout({children}) {
  return (
    <>
    <div className='wrapper'>
        <div className="container">
            <div className="header"><Nav></Nav>
                </div>  
              <div className="main">{children}</div>    
              <div className="footer"></div>
                  </div>
    </div>
    </>
  )
}

export default Layout