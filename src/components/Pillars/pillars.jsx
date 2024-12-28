import React from "react";
import * as styles from './pillars.module.css';
import image1 from '../../images/pillars/image-1.png'

const Pillars= ()=> {
    return (
        <div className= {styles.pillars}>
            <h1>Pillars of <span>Vajr</span></h1>

            <div className= {styles.content}>
                <div className= {styles.blurBg}></div>
                <div className= {`d-flex flex-wrap justify-content-center align-items-center ${styles.box}`}>
                    <img src= {image1} alt="" />
                    <h4>NeauraHive AI Platform</h4>
                    <span>1</span>
                    <p>Adaptive, Real-Time AI for Threat Detection and Response</p>
                </div>
            </div>
        </div>
    );
};

export default Pillars;