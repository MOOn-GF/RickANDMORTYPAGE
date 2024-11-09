import React from 'react'
import Imge from '../UI/Imge/Imge'
import st from './List.module.css'
import Name from '../UI/Name/Name'
import Status from '../UI/Status/Status'
import Gender from '../UI/Gender/Gender'
import Species from '../UI/Species/Species'

function List({array}) {
  return (
    <>
    <ul className={st.list}>{
        array.map((e,i)=>(
            <li className={st.li}  key={e.id}>
               
                <div className={st.cube}>
                    <Imge url={e.image} > </Imge>
                    <div className={st.wri}>
                        <Name text={e.name}></Name>
                    <Status indicate={e.status} text={e.status}></Status>
                   <Gender text={e.gender}></Gender>
                  <Species text={e.species}></Species>
                    </div>
                </div>
            
        </li> 
        ))
        }
       
    </ul>
    </>
  )
}

export default List