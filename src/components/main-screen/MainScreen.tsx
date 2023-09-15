import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './MainScreen.module.sass'
import TitileMain from "./title-main/TitileMain";
import Dots from "./dots/Dots";
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void

const MainScreen: FunctionComponent<{setDiscuss: setDiscussType}> = ({setDiscuss}) => {
    return <div className={styles.mainBody}>
        <div style={{margin: '0 5.208vw'}}>
            <Header setDiscuss={setDiscuss} page={'main'}/>
        </div>

        <div className={styles.titleBox}>
            <TitileMain/>
            <Dots/>
        </div>
    </div>
}

export default MainScreen;