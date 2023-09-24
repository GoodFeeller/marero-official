import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './MainScreen.module.sass'
import TitileMain from "./title-main/TitileMain";
import Dots from "./dots/Dots";
import {setNowPageType} from "../../../public/staticInfo";

interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const MainScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    return <div className={styles.mainBody}>
        <div>
            <Header setPosition={setPosition}  setNowPage={setNowPage} page={'main'}/>
        </div>

        <div className={styles.titleBox}>
            <TitileMain/>
            <Dots/>
        </div>
    </div>
}

export default MainScreen;