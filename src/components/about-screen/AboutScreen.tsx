import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from "./AboutScreen.module.sass"
import Dots from "../main-screen/dots/Dots";
import AboutTitle from "./about-title/AboutTitle";
import {setNowPageType} from "../../../public/staticInfo";
const AboutScreen: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    return <div className={styles.mainBody}>
        <div style={{margin: '0 5.208vw'}}>
            <Header setNowPage={setNowPage} page={'about'}/>
        </div>

        <div className={styles.titleBody}>
            <AboutTitle/>
            <Dots/>
        </div>
    </div>
}

export default AboutScreen