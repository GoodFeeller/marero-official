import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './MainScreen.module.sass'
import TitileMain from "./title-main/TitileMain";
import Dots from "./dots/Dots";
import {setNowPageType} from "../../../public/staticInfo";

const MainScreen: FunctionComponent<{setNowPge: setNowPageType}> = ({setNowPge}) => {
    return <div className={styles.mainBody}>
        <div>
            <Header  setNowPage={setNowPge} page={'main'}/>
        </div>

        <div className={styles.titleBox}>
            <TitileMain/>
            <Dots/>
        </div>
    </div>
}

export default MainScreen;