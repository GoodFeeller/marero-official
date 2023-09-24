import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from "./AboutScreen.module.sass"
import Dots from "../main-screen/dots/Dots";
import AboutTitle from "./about-title/AboutTitle";
import {setNowPageType} from "../../../public/staticInfo";
interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const AboutScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    return <div className={styles.mainBody}>
        <div>
            <Header setPosition={setPosition} setNowPage={setNowPage} page={'about'}/>
        </div>

        <div className={styles.titleBody}>
            <AboutTitle/>
            <Dots/>
        </div>
    </div>
}

export default AboutScreen