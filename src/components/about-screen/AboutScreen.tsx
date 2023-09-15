import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from "./AboutScreen.module.sass"
import Dots from "../main-screen/dots/Dots";
import AboutTitle from "./about-title/AboutTitle";
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void
const AboutScreen: FunctionComponent<{setDiscuss: setDiscussType}> = ({setDiscuss}) => {
    return <div className={styles.mainBody}>
        <div style={{margin: '0 5.208vw'}}>
            <Header setDiscuss={setDiscuss} page={'about'}/>
        </div>

        <div className={styles.titleBody}>
            <AboutTitle/>
            <Dots/>
        </div>
    </div>
}

export default AboutScreen