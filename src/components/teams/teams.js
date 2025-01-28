import React from 'react'
import * as styles from './teams.module.css'
import Footer from '../footer/Footer';
import t1img from '../../images/teams/t1img.png'

const Teams = () => {
  return (
    <div className={styles.section1}>
      <h1 className={styles.teamHeading}>Team</h1>
      <div className={`container ${styles.sectionPs}`}>
        <div className="row">
          <div className={styles.image}>
            <img className={styles.profileImg} src={t1img} alt="" />
          </div>
          <div className="col-sm-9">
            <h3 className="psHeading">Parag salve</h3>
            <span>CEO</span>
            <br />
            <br />
            <span className={styles.contentPs}>As a CEO, he brings in his business acumen to the fore he </span>
            <br />
            <span className={styles.contentPs}>gamered while leading an IIoT  ventures and a sattelite</span>
            <button className={styles.button}>Read more</button>
          </div>
        </div>
      </div>
      <div className={`container mt-5 ${styles.sectionPs}`}>
        <div className="row">
        <div className="col-sm-9">
            <h3>kapil Kanugo</h3>
            <span>CTO</span>
            <br />
            <br />
            <span className={styles.contentPs}>As a CTO he brings in 17 years of AI  experience while</span>
            <br />
            <span className={styles.contentPs}>leading teams at MarterCard, Accenture among </span>
            <br />
            <button className={styles.button}>Read more</button>
          </div>
          <div className="col-sm-3">
          <img className={styles.profilek2} src="https://s3-alpha-sig.figma.com/img/33ba/c52b/e2c4c2babd31ecbb16b05f8d9f8abc5d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjmmtDMe7IipmWIQbi0uYfdzTYGgK2F1iBZSZkAiHIRzV0GE95VT3TasOuyCIJWItzog1yOYoL-mCQ0LTmdb3QyewW8kk7SeJJB90bAlCZKTFzkpHFFzcztjQGzVruk0V3LGf9b77J8ugL7zLKu~nhQ0TwIRSI~hFTh7m216Wfykdi4hJcvX4TWXwo6vcFCl6-DsMRYqvtIJugQv~AYDK0sF3UreSVj-c3svISxQe69Nw8YiZd5S6H9GIvQckVe3RrUGzfG3We2iHER4wbuaScDOWYU-4XWfx9KWbExzdBk3oOU07HQj~OqUtltk70pndTZvYZR5i4jNf~aNzzMTAw__" alt="" />
          </div>
        </div>
      </div>
      <div className={`container mt-5 ${styles.sectionPs}`}>
        <div className="row">
          <div className="col-sm-3">
          <img className={styles.profilek2} src="https://s3-alpha-sig.figma.com/img/770a/e2c5/5df09db10f643a56fe234007452b7f93?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KWtC0I3vtYS2S608Tb4ySDlITWG6XeHf6MP0jH~DT0WKuGdwZ5egSpRnuM9R2YINKn8nLybszD2axC-i8YbuplreAEPdl1Z~~txHI0IFVScV02t0QeRuXYnqLp7ibnD4Kjsms-gMh3rfeaNcSqr5ryUk6tjKVbdWfHOL0zbOQT-L68JBjQzwJFrIB17a0P7VRD7SfFrnZn2cYdiCb11C1QAczyKWljQvWFbmswqMfybuOIzUxLO0NkNephVOukK1ggrejVIxrkaeZWg1hd2hZpEExZFi3~WLbBvoH3UDnRNenbt5QdgdUJJ-TCmJUV~RlXJ1LbuManLWH15wBAxHAA__" alt="" />
          </div>
          <div className="col-sm-9">
            <h3 className="psHeading">Jitendra Patil</h3>
            <span>Engineer</span>
            <br />
            <br />
            <br />
            <span className={styles.contentPs}>A staff Engineer at intel, he’ll lead the infrastructure</span>
            <br />
            <span className={styles.contentPs}>team focusing on optimizing open source AI Software</span>
            <br />
            <button className={styles.button}>Read more</button>
          </div>
        </div>
      </div>
      <div className={`container mt-5 ${styles.sectionPs}`}>
        <div className="row">
        <div className="col-sm-9">
            <h3>Shashank Rao</h3>
            <span>Tech Lead for AI</span>
            <br />
            <br />
            <span className={styles.contentPs}>Is the Tech Lead for AI solutions with strong </span>
            <br />
            <span className={styles.contentPs}>technical skills leading customer engagements in AI. </span>
            <br />
            <button className={styles.button}>Read more</button>
          </div>
          <div className="col-sm-3">
          <img className={styles.profilek2} src="https://s3-alpha-sig.figma.com/img/7d42/2455/eed015e28264f5b2d3d72a9fe5adfeb8?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RPza7dE-aOBMM6eC5TZ8ctoWwYl7Tu29D2QujGE8Sx-BaR-NH9gA4mmdw0RULv42OWN26WLY5vdnYtNTdESvQd6mFa7Tt1GXshyQifpA2dVO0SWau78qpJVkcvuLaovrEiY5w86~QyCD43QC9BsicymmKtulf89e02WfS5hKUri6y8D4w17hmRSdhIrzmkWWZ9ainOC9-inMSn2VM2J8ZueieKf1HWRxs8wrGPjGbmvi1t6NxEnZ0Fy4-OOvhtgUyVdBye7TpUxvKkJWqhXX6LLFybCe-MK1Z02FgzpGT8rE5QWLgPW0FO0PiO-d0MbdJUFx1yJrA1rX6VCkhkenKQ__" alt="" />
          </div>
        </div>
      </div>
      <div className={`container mt-5 ${styles.sectionPs}`}>
        <div className="row">
          <div className="col-sm-3">
          <img className={styles.profilek2} src="https://s3-alpha-sig.figma.com/img/299f/3fb0/c5404cea09fda5c1b78b25291f4d74bb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dvLU8GTzt~6mYjA3ybaoXQEqaG0J384cEP3LnpieX4S-f534wHRv0fjLv2pV3vkd2xn4OpI7912kbBov8nsDc2kNmMTtEIhvevvClP4dVNN~qYigH9hMqdkrem-UZx8bYvMgiAltp8tMZCoXIKfSh40fhEvq~t~dHlewBZoneg-CiwH5uLme2pHqymsGPmJVO5pioHUQQxLjNmzs8A4SBRb9d19cXnWaL0x0~PsJWu3ryNW6qQoWz0gcxvrlEQtavj1Vcmre2kGy9kMqHZZdEmL4DKPmbSVKN9pPlmmNu2BraHtIMygMNsp4v5bAPB7SyKPigR72LKpsGvr2JcShzg__" alt="" />
          </div>
          <div className="col-sm-9">
            <h3 className="psHeading">Jitendra Patil</h3>
            <span>Engineer</span>
            <br />
            <br />
            <br />
            <span className={styles.contentPs}>A Machine Learning Engineer curently driving</span>
            <br />
            <span className={styles.contentPs}>Gen AI innovation for us. He has solid foundation</span>
            <br />
            <button className={styles.button}>Read more</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Teams;