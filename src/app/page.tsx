// import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import "../styles/global.scss"
import Hero from '@/components//hero/Hero'
export default function Home() {
  return (
    <div className={styles["home-parent"]}>
      <div className={styles["home-nav"]}>
        <div>
          
        </div> 
        <div>
       <Hero 
        buttonText='Open Creator Studio'
       />
        </div>     
      </div>
    </div>
  )
}
