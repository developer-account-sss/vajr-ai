import React from "react";
import HeroSection from "../components/herosection/HeroSection";
import { Background } from "../components/background/background";
import {Problem} from "../components/problem/problem";
import AttackResponse from "../components/Attack-Response/attackResponse";
import Pillars from "../components/Pillars/pillars";




const MainPage = () => {
    return <div>
        <HeroSection/>
        <Background/>
        <Problem/>
        <AttackResponse />
        <Pillars />
    </div>
}

export default MainPage;