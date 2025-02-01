import React, { useEffect, useState } from "react"
import * as styles from "./contactUs.module.css"
import contactImg from "../../images/contact-us/contact-img.png"
import sendIcon from "../../images/contact-us/Email Send.png"
import "./contactUs.css"
import { useForm, ValidationError } from "@formspree/react"

const ContactUs = () => {
  const [isIpad, setIsIpad] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsIpad(window.innerWidth < 1025)
      console.log(isIpad)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const [state, handleSubmit] = useForm("xvgzrrww")

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <>
      <div className={`mobile-hide ${styles.contactUs}`}>
        <div className={isIpad ? "container-fluid" : "container"}>
          <div className="row" style={isIpad ? { margin: "auto 0.5em" } : {}}>
            <div className={`col-sm-6 d-flex flex-column ${styles.leftSide}`}>
              <div>
                <h2>Contact Us</h2>
                <h4>We're here to assist you</h4>
                <img src={contactImg} alt="Drone image" />
              </div>
            </div>

            <div className={`col-sm-6 ${styles.rightSide}`}>
              <div className=" d-flex flex-column flex-wrap align-content-center">
                <h2>Let's Talk</h2>
                <h4>Feel free to drop us a line below</h4>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    style={{ marginTop: "2em" }}
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email ID"
                  />
                  <textarea name="message" id="message">
                    Enter your message
                  </textarea>
                  <div style={{ margin: "2em 0px 0px auto" }}>
                    <button className="d-flex">
                      <img src={sendIcon} alt="Paper plane icon for send" />
                      <span>Get in Touch</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className={`desktop-hide ${styles.contactUsMobile}`}>
          <div className="container-fluid">
            <div className="row" style={{ margin: "auto 0.5em" }}>
              <div
                className={`col-sm-12 d-flex flex-column ${styles.rightSide}`}
              >
                <h2>Let's Talk</h2>
                <h4>Feel free to drop us a line below</h4>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    style={{ marginTop: "2em" }}
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email ID"
                  />
                  <textarea name="message" id="message">
                    Enter your message
                  </textarea>
                  <div style={{ margin: "2em auto" }}>
                    <button className="d-flex" type="submit">
                      <img src={sendIcon} alt="Paper plane icon for send" />
                      <span>Get in Touch</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
