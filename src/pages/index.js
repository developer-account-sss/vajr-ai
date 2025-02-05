import React, { useEffect, useState } from "react"
import HeroSection from "../components/herosection/HeroSection"
import ContactUs from "../components/contact-us/contactUs"
import logo from "../images/vajr-logo.png"
import SplashScreen from "../components/splash-screen/splashScreen"

const MainPage = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);

  }, [prevScrollPos])


  return (
    <div>
      <div className= {`d-flex flex-column header ${visible ? 'show' : 'hide'}`}>
        <h1>Vajr</h1>
        <img src={logo} alt="Logo for Vajr.ai" />
      </div>
      <HeroSection />
      <SplashScreen />
      <ContactUs />
    </div>
  )
}

export default MainPage
