import React from 'react'
import * as styles from './problem.module.css'

export const Problem = () => {
    return (
        <div className={`container-fluid ${styles.pageContainer}`}>
            <div className="row">
                <div className={`col-sm-12`}>
                    <div className={`box ${styles.box1}`}>
                        <div className='d-flex justify-content-center'>
                            <img className={styles.boxImage1} src="https://s3-alpha-sig.figma.com/img/d8e3/8d16/00854520a1c77768d0501d73e9c2765d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VhFA~KFpI5Mt1Kb3f~bNKehwsnQExOMvZWD6WKSi7gVPFT-Yx4WqzzFHDDaPpJ41hmXhnQnbVGtvA4v7ia4xRBvLOhRnSXgHicoaPX850xx69uvSWJyS0q9SfMq8ilEYzX8Jtak9SzbQt90RXYf794YiPR0hKb44Ty33840FUayBbHnZ95dmC8rNG~i-hYkpTFK-zlJCsa9qqOuuZVODzGx4lMI4V0RJHqhx3LECV9~TbVgfcU7Avb5akT73OC5O3Y2mlpPuY7IKaSU4mRQ7AkBflfyp0qO-PzPxxmHU4E45OGgzspQdOuxkCrBgfeDN2EFzWMCNsziH01m6le5O~Q__" alt="" />
                        </div>
                        <div className={styles.boxContent1}>
                            <span className="">Modern drone swarms are multi-agent,</span>
                            <br />
                            <span className="">autonomous systems</span>
                            <br />
                            <br />
                            <span>Adversaries overwhelm defenses with coordinated, multi-vector</span>
                            <span>attacks</span>
                        </div>
                    </div>


                </div>
                <div className={`col-sm-3 ${styles.boxParent} `}>
                    <div className= {`${styles.box2}`}>
                        <div className='d-flex justify-content-center'>
                            <img className={`${styles.image1}`} src="https://s3-alpha-sig.figma.com/img/d165/2f6d/aaf58001d93c0e46960c66b1bc71fd1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IttKfZHstxoXVY6aMHVct3HAjODevVhQ1170o~RotKlGD0EBrJvHz0D1ycU8KuzLxHEwt4cwE9-TRQQ-WN6K4L4HmEOGUy9rD~IhppL4ZXdzPpseOHoaW2a76BldSSVI3x9mqoo1RQTz9SSsfsQ7dO9okhuGacn1gBEhMlf4r7VRAp6lB4pW1NXmFiD~6FmJZlAJDF3q62pc8x39lKTPu8XXZ3fmwRSO3sqZfq0lwuX5crE~nDddlx0z-S9HdRSzROi67Fvbn9FCtE-EnsA~-EEneYT3Qpq9pwYiNP~xzZdPLaMz5Qc6Pwl-lNJQ~Z0~R9si2BZzsBS7KzJPpyAtEw__" alt="" />
                        </div>
                        <div className={`${styles.boxContent2}`}>
                            <span>Existing C-UAS systems are Cost-Prohibitive and</span>
                            <br />
                            <span>Inefficient</span>
                            <br />
                            <br />
                            <span>FPR(False Positive Rate) of ~40% in high RF </span>
                            <br />
                            <span>noise environments</span>
                            <br />
                            <br />
                            <span>High Deployment cost of $500,000+ per unit</span>
                        </div>
                    </div>
                    <div className= {`${styles.box2}`}>
                        <div className='d-flex justify-content-center'>
                            <img className={`${styles.image1}`} src="https://s3-alpha-sig.figma.com/img/6fea/fff5/cca55cee694193e65bf50ee71f34ebd5?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfxW71n6kdoUN~s-5Cg6l1oIV3ogj0tpRMylGBwA2KE-kEzorkjL9EUPAQuO8bvaUGqumyvZG83JBvWcPaOUaaBR7FeVJHYr8VHFFcumFcnn2irP0HkFA2Nr0mCqscfBtUN8s5S7GjQSJKQmmOFPWLMqDfevUtXqh5TUL0iaV4j1I3MEjdDJa7wL8fv4-GDLL6z3WQNxArSQ8amPaFdWG-I7ICBnI77zejif~U-s4zefj4YjXRg-3suFXwSZuhLvRzFxRaRA2dx1jlv2pmR7otI4EpINoQ0zA2NfaA5Dp3ElNv8k9MOjyKPS-6D2KW~g175HxJgTgltFy6H9hE3Puw__" alt="" />
                        </div>
                        <div className={`${styles.boxContent2}`}>
                            <span>Evade jamming and detection with frequency</span>
                            <br />
                            <span>hopping and LPI signals</span>
                            <br />
                            <br />
                            <span> &lt;25% effective for frequency hopping</span>
                            <br />
                            <span>Evade detection with low-power or masked </span>
                            <br />
                            <span>emissions</span>
                        </div>
                    </div>

                </div>

                <div className={`col-sm-6 d-flex justify-content-center`}>
                    <img className={styles.backgroundImg} src="https://s3-alpha-sig.figma.com/img/3594/d404/e6c9089b62d4e2b45c12f9e9148a2229?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lHORe4e1JGZs-H9r8GAWQCCc7qHJHjMnUery3-27LSaMjMfIzAOpfUP1zzXsqsIXgphMLy1NgBKa0C-NHO7~zuhRCRmg7kITawUIS05joPgM14dijFjIN8o546y9aEBqKEa1TB4JFSuVXAF5PmhllCRWwHEmerHXq7CMJenasmkBQaSlr4xZvp-JIatdvYH4pE3R3KW0JLQe-GUB0X0jDhBSkAs3IQ38TEnapz3Umo6~VxhIt4ngda0tOXaCoJj8OLiFBMaOvfb0SV69mOfTwgRS90L4o5buqJnloE9~NV84~jtYNeVwuMhRI7SwuWM3bsl2Yog1Sg0ugLosUpu99Q__" alt="" />
                </div>

                <div className={`col-sm-3 ${styles.boxParent}`}>
                    <div className={`${styles.box2}`}>
                        <div className='d-flex justify-content-center'>
                            <img className={styles.image3} src="https://s3-alpha-sig.figma.com/img/74d2/8018/6e02822f316a740917a4d85812b82a23?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qb-fS~yYVZ-lK30VI3pJeOo6WJ64uW6AHvlQCKa3gmnHHMMl7tU8OXqKmw3LpN8KGo9eaYsLV7mPna-ZF1zd9Nj-gRZRP2VRb-zciCE~4Cmrdu45i6dkr2MNJp1SgcoxCgw55wCCGwmMIr~mW~86Y63G30Ia0mV4Vwn8teSBngCZwT7eTrxhCpEpB~2L4Eitcce2L4bjXCoP7bi3wyU6Lha2YynKsHWJdsVYb8mFWOTv-zyoLDRCBCPI8PYocHrJPXbdQrjf6TLWlLLejJmx09JtT8xK8DTPFnA2xoKmoOQQ3eDjCbJ6E-7yyEgfbVvITJSH2Jq0S~fMtUznsKWN5g__" alt="" />
                        </div>
                        <div className={`${styles.boxContent3}`}>
                            <span>Existing C-UAS systems have Low Detection &</span>
                            <br />
                            <span>High Latency</span>
                            <br />
                            <br />
                            <span>Up to 90% detection failure with LPI</span>
                            <br />
                            <br />
                            <span>Response latency of Up to 1.5s</span>
                        </div>
                    </div>
                    <div className={`${styles.box2}`}>
                        <div className='d-flex justify-content-center'>
                            <img className={styles.image3} src="https://s3-alpha-sig.figma.com/img/5375/76e4/cceb5fea78557c71cdb14527bc276d16?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RnYSiQY8TArpVIW1cl-vjRS5aKSutlKr5OQo9DIambZNcO9MhhRNtoLtqd9IhBaqcE84gPHM2NVS2GESVUX5EC9BV269W7B22Wm~bGPWH5WnLg29bmrDpA06ILjbG0sdI030RJReZhADf~tSIDTVBr1eKRLgweI85ROLHGQ2vaC~ZfnmgXNXmBg9RWTOrfYVPawSXCMnwS27Xp9lAtlz8BD0OTtfwwUqYwd6MmaqBSV9v1KzPKkt--Uz8KN~E9SvNFSHYscCSYIDWtTP9-e6rmpA7i5ci32XIAV-MovmfJPU7HsCBkpyMD2wYQ~cu9x6yFan0JH-6Owp3iLuCH2Gbg__" alt="" />
                        </div>
                        <div className={`${styles.boxContent3}`}>
                            <span>Static countermeasures ineffective against</span>
                            <br />
                            <span>adaptive swarms</span>
                            <br />
                            <br />
                            <span>Impractical for large-scale deployment</span>
                            <br />
                            <br />
                            <span>Point solutions don’t account for </span>
                            <br />
                            <span>range of evolving tactics</span>
                        </div>
                    </div>


                </div>


            </div>



        </div>
    )
}

