import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const inter = Inter({ subsets: ['latin'] })

const SocialMedia = () => {
  return (
    <div>
      <a>
        <FontAwesomeIcon icon="fa-brands fa-discord" style={{color: "#6d40b0", width:"50px", height:"50px"}} />
      </a>

      <a>
  
      </a>

      <a>
  
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
        <h1> 
          <span className={styles.firstLetterTitle}>A</span>
          valon <span className={styles.firstLetterTitle}>R</span>aider
        </h1>
        <form className={styles.login}>
            <label for="userEmail">E-mail:</label>
            <input type="email" name="userEmail" required placeholder="Insert Email"></input>
            <label for="userPassword">Password:</label>
            <input type="password" name="userPassword" required maxLength="5" placeholder="Insert password"></input>
            <button type="submit" className={styles.btn}>
              <span className={styles.btnTitle}>Login</span>
            </button>
        </form>
        <SocialMedia/>
    </div>
  )
}
