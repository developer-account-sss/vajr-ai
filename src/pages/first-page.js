import React from "react";
import HeroSection from "../components/herosection/HeroSection";
import { Background } from "../components/background/background";
import {Problem} from "../components/problem/problem";
import Solution from "../components/solution/solution";
import Teams from "../components/teams/teams";




const MainPage = () => {
    return <div>
        <HeroSection/>
        <Background/>
        <Problem/>
        <Solution/>
        <Teams/>
    </div>
}

export default MainPage;