import React, { useEffect } from "react";
import * as styles from './splashScreen.module.css';
import logo from '../../images/vajr-logo.png';

const SplashScreen = () => {
    const isBrowser = typeof window !== "undefined";

    useEffect(() => {
        if (isBrowser) {
            // Ensure elements exist before querying them
            const splashScreen = document.querySelector('.splash-screen');
            const heading = document.querySelector('.splash-screen h1');

            if (!splashScreen || !heading) return;

            // Intersection Observer (Currently Empty, Add Logic If Needed)
            const observer = new IntersectionObserver(() => {
                // Logic for intersection handling (optional)
            });

            // Scroll Event Listener
            const handleScroll = () => {
                splashScreen.classList.add('transform');
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                observer.disconnect();
            };
        }
    }, [isBrowser]);
    return (
        <div className={`splash-screen ${styles.splashScreen}`}>
            <div className={styles.logoSection}>
                <h1>Vajr</h1>
                <img src={logo} alt="Vajr AI logo" />
            </div>
        </div>
    );
};

export default SplashScreen;
