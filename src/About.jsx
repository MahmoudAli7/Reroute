import React from 'react'
import styles from "./style";
import { Navbar, AboutUs, Profile, InfoAboutUs} from "./components";


const About = () => {
  return (
    <div id="about" className="bg-primary w-full overflow-hidden">
      <div>
        <Navbar />
      </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutUs />
      </div>
    </div>

    <div className={`bg-primary py-56 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <InfoAboutUs />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Profile/>
      </div>
    </div>
  </div>
  )
}

export default About