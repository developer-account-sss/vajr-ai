import React from "react"
import * as styles from "./pillars.module.css"
import image1 from "../../images/pillars/image-1.png"
import drone from "../../images/pillars/drone.png"
import image2 from "../../images/pillars/image-2.png"

const Pillars = () => {
  return (
    <div className={styles.pillars}>
      <h1>
        Pillars of <span>Vajr</span>
      </h1>
    <div className= {styles.firstBlock}>
      <div className={styles.content}>
            <div className={styles.blurBg}>       
            </div>
            <div className={`d-flex flex-wrap justify-content-between align-items-center ${styles.box}`}>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                <img src={image1} alt="" />
                <h4>NeauraHive AI Platform</h4>
                <span>1</span>
            </div>
            <div
                className={`d-flex flex-wrap justify-content-center align-items-center ${styles.boxContent}`}
            >
                <p>Adaptive, Real-Time AI for Threat Detection and Response</p>
            </div>
            </div>
      </div>
      </div>

        <div className= {styles.secondBlock}>
           <div className={`col-sm-5 ${styles.droneImage}`}>
        <img src= {drone} alt="Image of a drone" />
      </div>
      <div className={`col-sm-6`}>
        <div className={`${styles.content}`}>
                <div className={styles.blurBg}>       
                </div>
                <div className={`d-flex flex-wrap justify-content-between align-items-center ${styles.box}`}>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <span>2</span>
                    <h4>First-Line Defense UAVs (FLD-UAVs)</h4>
                    <img src={image2} alt="" />

                </div>
                <div
                    className={`d-flex flex-wrap justify-content-center align-items-center ${styles.boxContent}`}
                >
                    <p>Rapid Response and GPS Spoofing Drones</p>
                </div>
                </div>
        </div>
      </div> 
        </div>
      
    </div>
  )
}

export default Pillars
