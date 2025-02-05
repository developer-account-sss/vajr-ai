import React from "react";
import HeroSection from "../components/herosection/HeroSection";
// import { Background } from "../components/background/background";
// import {Problem} from "../components/problem/problem";
// import AttackResponse from "../components/Attack-Response/attackResponse";
// import Pillars from "../components/Pillars/pillars";
import ContactUs from "../components/contact-us/contactUs";
import logo from '../images/vajr-logo.png';
import SplashScreen from "../components/splash-screen/splashScreen";




const MainPage = () => {
    return (
        <div>
            <div className="d-flex flex-column header">
                <h1>Vajr</h1>
                <img src= {logo} alt="Logo for Vajr.ai" />
            </div>
            <HeroSection/>
            <SplashScreen />
            <ContactUs />
            {/* <Background/>
            <Problem/>
            <AttackResponse />
            <Pillars /> */}
        </div>
    )
}

export default MainPage;