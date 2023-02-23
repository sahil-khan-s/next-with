import React from 'react'
import '../socialMediaIcons/HeaderIcons.module.scss'
// import '../socialMediaIcons/HeaderIcons.module.scss'
// import styles from '../socialMediaIcons/HeaderIcons.module.scss'
import { headerIcons } from '@/types'
function HeaderIcons(
{
icon1,
icon2,
icon3,
icon4,
}:headerIcons

) {
  return (
    <div className="social-media-icons">
       <img src={icon1} alt="" width={30} height={30} /> 
       <img src={icon2} alt="" width={30} height={30}/> 
       <img src={icon3} alt="" width={30} height={30}/> 
       <img src={icon4} alt="" width={30} height={30}/> 
    </div>
  )
}

export default HeaderIcons