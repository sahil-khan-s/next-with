import React from "react";
import styles from '../hero/Hero.module.scss'
import { NavBar } from '../../types/index';
import HeaderIcons from "../common/socialMediaIcons/HeaderIcons";
import fb from "../../assets/fb.svg"
import insta from "../../assets/insta.svg"
import twitter from "../../assets/twitter.svg"
import tiktok from "../../assets/tiktok.svg"
function Hero({  
    buttonText,
}: NavBar) {
  return (
    <div>    
    <div className={styles["nav-parent"]}>
      <img className={styles["logo"]}
        width={260}
        height={50}
        src="https://i0.wp.com/frow.live/wp-content/uploads/2021/10/frow-horizontal-transparent-512.png?fit=512%2C119&amp;ssl=1"
        alt="frow"
       />
      <button className={styles["nav-btn"]}>{buttonText}</button>
      <div>
        <HeaderIcons
        icon1={fb}
        icon2={insta}
        icon3={twitter}
        icon4={tiktok}
        />
      </div>
    </div>
    </div>
  )
}

export default Hero;
