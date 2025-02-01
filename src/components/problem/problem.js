import React from 'react'
import * as styles from './problem.module.css'

export const Problem = () => {
    return (
        <div className={`container-fluid ${styles.pageContainer}`}>
            <div className="row">
                <div className={`col-sm-12`}>
                    <div className={`box ${styles.box1}`}>
                        <div className='d-flex justify-content-center'>
                            <img className={styles.boxImage1} src="https://s3-alpha-sig.figma.com/img/d8e3/8d16/00854520a1c77768d0501d73e9c2765d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QWbzSUQhl59IYtvB9MR9BOXw0zkibcXK5FqPNczR0RPocO4FT5Ryz9UIlbfofsneVhxLtFvqL~5uiqwdUitKxj9WA7XEPf35qm-JWUdTrSbWZDbjPgtNgnKqhlZ1s6mLR-ljElCZoMt6lIPPlox4OIQtWsXwqsCv~poQxtcAwKq23konpsOG-8weFE~GKRVjcAO~wGBhJjEeJv~0~TfspSyHcjq~7f586S4XbKr7EzCbAi9jHuQlolK78~Bf29moMJFC5DCibMtZhsI9EfC5lLfu4G7ahz98spc3zmDgYOkY37vxBda6JMQupABhOHQEGpFC8hEnAz1E74YXDTUQZQ__" alt="" />
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
                            <img className={`${styles.image1}`} src="https://s3-alpha-sig.figma.com/img/d165/2f6d/aaf58001d93c0e46960c66b1bc71fd1d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VTy7BoMAD5UMpNYA~z85SrDry7SjzvDw6lBa-x6A1M8wdiMKcgsm7yoMtL3~R-UloweVMtUET97ODu1heSW2eDkudK-W2tbUo44-bQXWnWkvQbpYg0DR7naMyKYnNXZXmJyLu~6G7R4kUHMEp0BUPBbhKRxKR95kMHEiGk2NYcrMOEK3MUm6RXwKK~9g8nwBwsrS0Xb4yGoL140QVOWxRH6LG-BHsWzzpJNIruW1g3K7E4-lyNZ4gLY3wQ0Pc1S~dyx0xsrQNTtjM4vWe5LF8wI6ljez2Hkb9iP1Gsh31389InlqxF75X1EPq0dVXBa18V1p-DVyZDoFwJgvkDiwfg__" alt="" />
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
                            <img className={`${styles.image1}`} src="https://s3-alpha-sig.figma.com/img/6fea/fff5/cca55cee694193e65bf50ee71f34ebd5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XezuyT-1qSQgbes7jciMaYYgzjxTBYwXUQqU~pFah9KAdpA8be3d3w7y0pdMRM1EAKsCj8RgmYDGyJmUYJChk1SheO~~jM3~tQbzwEvLlgcga6MiEVrbZjL7qHNN8Z7ycn8hNAlq2u59ZjKUSUjNiIS~VBmfFPmc5Wo6XQc0mQAsQb9eS6XK8oIKEfUQCDPZcvx2-X17eYmAwn4f~e3Rtea5PEbTOhFCnA3ySMI1i3EjU8lEtrsYtedF50tmtCu7sYzP4mzHGo42zpe-eMgriF944wQkTORj7Ic1FOWmPkn-FismzGGWNvzG~1BhKmky9jub7ITQbsIvRJIUTKPlzw__" alt="" />
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
                    <img className={styles.backgroundImg} src="https://s3-alpha-sig.figma.com/img/3594/d404/e6c9089b62d4e2b45c12f9e9148a2229?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CkTkkFVvOXeMGa5oiaseIw8eVIhoWs9VcC39W9lVNTl3RHbu~lxVhAqsMBxw-LMLkR2lZdYQ~OARaX4T3~V1s5PuaTeCNU1XOPi1lcOX5HOtSbyoZ4eKYMZlP-XfRHqBPjOPoLiphblzw8HGyFxQtrN0KuYk2bAYDNle8QSfQDhVrBsg491g7LnoEhToYHWiQHno557SKqhkNVYXUURHegD~UoTG0mgVAIBG3jqne9f-QA5kTox1-K~wsFaTRKGEiszcKtPyGviKsWW5T3Yy4-5LqpKnSeI3bUrtraCg7fWceM4XPNSCjYIUmOpo4ilKlTh7T3aYqzI92VIHwx2~fQ__" alt="" />
                </div>

                <div className={`col-sm-3 ${styles.boxParent}`}>
                    <div className={`${styles.box2}`}>
                        <div className='d-flex justify-content-center'>
                            <img className={styles.image3} src="https://s3-alpha-sig.figma.com/img/74d2/8018/6e02822f316a740917a4d85812b82a23?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5KHByXmL1clixOAFFR5R695w46SkWIswsxTiDAZGsaUvPrDhwxkXX4HKZBsZGxDKEBKf-~ZQ51OjPc6Go3J-npYgcQ7eXMUipSajuIMgLsGxVSEo-nuWMRsIhyOzz8I8hvftvJIq81nEwIDQrZE9xQGmjrabEzbgF75KLXyySAK58Qta2Go-uVYvOzVxJzuAhaclSwjz83yC9voa3ny0kJgkX2GDYFsLH74BQXibbmmQhXGKnVjNIQzxz2vuhCT-M3yPqdTqvyPrFl9mMS6ueR04GfzsNO6V~NX9duh8006X52i8W8nO6IO6udRkEP1uk7IGZ2U19NI-WJIEQPqWA__" alt="" />
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
                            <img className={styles.image3} src="https://s3-alpha-sig.figma.com/img/5375/76e4/cceb5fea78557c71cdb14527bc276d16?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hVuE2rr3hlxPMOb-xVt--tkWBeX7SMr6~l6B4eHorVRdp4gsmK2qeIR~hKdp-moXlIEIfkkQ3uaM2knkReyq0fW~87LRJhy4xIXs6X52lal~GYxOH2srApWbUhpRlii2VHEnj2XFYGr3aOW2rltX1JQXBbQ36vKmIF5mI7KuptKvVyy~R2itvB5Hm2D7XrKlVUS08THCOz-POnoMo1ZrFE4lPyWL-mLWn45RhtdarLegOdx9jyhtfty0JrQm-7h62o0Pl1r0S8snZprEthG6C5xqU6T2JClrnZAXjPgog2~HYSf3p13ZAD6m5aeovZgOPHQaNs-G7vIPKE6BRrnVsQ__" alt="" />
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

