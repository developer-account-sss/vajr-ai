import React from "react";
import * as styles from './herosection.module.css'

const HeroSection = () => {
    return (
        <section>
            <div className={`container-fluid `}>
                <div className="row">
                    <div className={`col-sm-12 ${styles.heroSection}`}>
                    <h1 className={styles.title}>Intelligent, Multi-Layered Counter Swarm UAS defense system</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroSection;