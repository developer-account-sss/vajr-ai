import React from "react";
import HeroSection from "../components/herosection/HeroSection";
import { Background } from "../components/background/background";
import {Problem} from "../components/problem/problem";




const MainPage = () => {
    return <div>
        <HeroSection/>
        <Background/>
        <Problem/>
    </div>
}

export default MainPage;